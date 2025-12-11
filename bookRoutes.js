const express = require("express");
const router = express.Router();

const {
    tambahBuku,
    cariBuku,
    updateStok,
    konfirmasiPesanan
} = require("../controllers/bookController");

// Endpoint sesuai soal
router.post("/", tambahBuku);
router.get("/", cariBuku);
router.put("/:id", updateStok);
router.post("/:id/konfirmasi", konfirmasiPesanan);

module.exports = router;
