const Link = require("../models/Link");

const createLink = async (req, res) => {
  try {
    const { link } = req.body;
    const shortId = Math.random().toString(36).substring(2, 15);
    const newLink = new Link({ originalUrl: link, shortId });
    const shortUrl = `${process.env.BASE_URL}/${shortId}`;
    await newLink.save();
    return res.status(200).json({
      status: 200,
      msg: "Link created successfully",
      shortId: shortId,
      newLink: shortUrl,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, msg: "Internal Server Error", error });
  }
};

const redirectLink = async (req, res) => {
  try {
    const { shortId } = req.params;
    const link = await Link.findOne({ shortId });
    const originalUrl = link?.originalUrl;
    if (!originalUrl) {
      return res.status(404).json({ status: 404, msg: "Link not found" });
    }
    link.clicks++;
    await link.save();
    return res.redirect(originalUrl);
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, msg: "Internal Server Error", error });
  }
};

const getLinkByQuery = async (req, res) => {
  try {
    const { shortId } = req.query;
    if (!shortId) {
      return res.status(400).json({
        status: 400,
        msg: "shortId query parameter is required",
      });
    }

    const link = await Link.findOne({ shortId });
    if (!link) {
      return res.status(404).json({
        status: 404,
        msg: "Link not found",
      });
    }

    return res.status(200).json({
      status: 200,
      msg: "Link found",
      data: {
        shortId: link.shortId,
        originalUrl: link.originalUrl,
        clicks: link.clicks,
        createdAt: link.createdAt,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, msg: "Internal Server Error", error });
  }
};

module.exports = { createLink, redirectLink, getLinkByQuery };
