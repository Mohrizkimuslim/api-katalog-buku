let books = [];
let nextId = 1;

// 1. Tambah Buku
exports.tambahBuku = (req, res) => {
    const { judul, penulis, stok } = req.body;

    if (stok <= 0) {
        return res.status(400).json({ message: "Stok harus lebih dari 0" });
    }

    const newBook = {
        id: nextId++,
        judul,
        penulis,
        stok,
        status: "pending"
    };

    books.push(newBook);

    res.json({
        message: "Buku berhasil ditambahkan",
        data: newBook
    });
};

// 2. Cari Buku
exports.cariBuku = (req, res) => {
    const { judul } = req.query;

    if (judul) {
        const hasil = books.filter(b =>
            b.judul.toLowerCase().includes(judul.toLowerCase())
        );
        return res.json(hasil);
    }

    res.json(books);
};

// 3. Update Stok
exports.updateStok = (req, res) => {
    const id = parseInt(req.params.id);
    const { stok } = req.body;

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Buku tidak ditemukan" });
    }

    book.stok = stok;

    res.json({
        message: "Stok berhasil diperbarui",
        data: book
    });
};

// 4. Konfirmasi Pesanan
exports.konfirmasiPesanan = (req, res) => {
    const id = parseInt(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Buku tidak ditemukan" });
    }

    book.status = "confirmed";

    res.json({
        message: "Pesanan telah dikonfirmasi",
        data: book
    });
};
