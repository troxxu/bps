# 🎓 Portal Evaluasi & Performance Appraisal Report — BEM FTEIC ITS
> Biro Personalia & Biro Keorganisasian | BEM Fakultas Teknologi Elektro dan Informatika Cerdas, Institut Teknologi Sepuluh Nopember Surabaya.

Website internal modern (*Clearwave Design System*) untuk fungsionaris BEM FTEIC ITS Kabinet 2026. Portal ini digunakan oleh seluruh anggota kabinet (Kadep, Wakadep, Kabiro, Sekretaris Departemen, dan Staf) untuk mengakses lembar nilai evaluasi bulanan dan Performance Appraisal Report secara privat via Google Sheets terproteksi PIN, serta dilengkapi Live PDF Viewer Standar Operasional Prosedur (SOP) Biro Personalia.

---

## 📊 Data Kabinet Terdaftar (94 Anggota)

Sesuai ketentuan, data yang dimasukkan mencakup seluruh jajaran 6 departemen:
- **Kepala Departemen (Kadep)**
- **Wakil Kepala Departemen (Wakadep)**
- **Kepala Biro Departemen (Kabiro)**
- **Sekretaris Departemen (Sekdep)**
- **Staff Departemen**

*(Catatan: BPH dan BPS tidak dimasukkan ke dalam daftar evaluasi).*

| Departemen BEM | Jumlah Anggota | Komposisi Jabatan |
| :--- | :---: | :--- |
| **DAGRI** (Dalam Negeri) | **15** Orang | Kadep, Wakadep, Sekdep, 2 Kabiro, 10 Staf |
| **PSDM** (Pengembangan SDM) | **13** Orang | Kadep, Wakadep, Sekdep, 2 Kabiro, 8 Staf |
| **RISTEK** (Riset & Teknologi) | **15** Orang | Kadep, Wakadep, Sekdep, 2 Kabiro, 10 Staf |
| **SOSMAS** (Sosial Masyarakat) | **18** Orang | Kadep, Wakadep, Sekdep, 3 Kabiro, 12 Staf |
| **LUGRI** (Luar Negeri) | **18** Orang | Kadep, Wakadep, Sekdep, 2 Kabiro, 13 Staf |
| **KWU** (Kewirausahaan) | **15** Orang | Kadep, Wakadep, Sekdep, 2 Kabiro, 10 Staf |
| **TOTAL** | **94** Orang | Tersebar di 6 Jurusan FTEIC ITS |

---

## 🔑 Sistem Autentikasi PIN Staf & Pimpinan

- **Default PIN:** Disetel otomatis menggunakan **4 digit terakhir NRP** masing-masing anggota (contoh: Hasan NRP `5027231073` $\rightarrow$ PIN: `1073`).
- Anggota juga dapat login menggunakan full NRP jika diinginkan.
- Anda dapat mengubah kode PIN kapan saja di file [`app.js`](file:///C:/Users/thilm/.gemini/antigravity-ide/scratch/bem-fteic-evaluasi/app.js).

---

## ⚙️ Cara Mengubah Link Google Sheets Masing-Masing Anggota

Buka berkas [**`app.js`**](file:///C:/Users/thilm/.gemini/antigravity-ide/scratch/bem-fteic-evaluasi/app.js):
Cari array `staffList`, lalu sesuaikan properti `sheetUrl` dengan link spreadsheet Google Sheets Performance Appraisal Report bulanan masing-masing:

```javascript
{
  "id": "staf-001",
  "nama": "Hasan",
  "role": "Kadep Dagri",
  "roleCategory": "Pimpinan",
  "departemenBEM": "DAGRI",
  "nrp": "5027231073",
  "asalDepartemen": "Teknologi Informasi",
  "pin": "1073",
  "sheetUrl": "https://docs.google.com/spreadsheets/d/ID_SPREADSHEET_HASAN/edit"
}
```

---

## ✨ Fitur & Keunggulan Portal

1. **Badge Khusus Jabatan & Departemen**:
   - `👑 Kepala Dept` (Badge Emas/Amber)
   - `⚡ Wakil Kadep` (Badge Indigo)
   - `💼 Kepala Biro` (Badge Sky Blue)
   - `📝 Sekretaris` (Badge Ungu)
   - `Staf` (Badge Hijau/Teal)
2. **Tab Filter Cepat**:
   - Filter instan per departemen: `Semua (94)`, `DAGRI (15)`, `PSDM (13)`, `RISTEK (15)`, `SOSMAS (18)`, `LUGRI (18)`, `KWU (15)`.
3. **Pencarian Multifungsi (*Live Search*)**:
   - Cari berdasarkan Nama Lengkap (contoh: *Hasan*, *Jeremia*, *Keindra*, *Emmanuela*).
   - Cari berdasarkan NRP (contoh: *5027231073* atau 4 digit akhir *1073*).
   - Cari berdasarkan Jabatan (*Kadep*, *Wakadep*, *Kabiro*, *Sekretaris*, *Staff*).
   - Cari berdasarkan Jurusan ITS (*Teknik Elektro*, *Teknik Informatika*, *Sistem Informasi*, dsb.).
4. **Modal Popup PIN & Proteksi Privasi**:
   - Dilengkapi avatar, nama, NRP, jabatan, dan asal jurusan.
   - Input PIN dengan toggle lihat/sembunyikan (👁️/🙈).
   - Efek getar (*shake*) jika PIN keliru, dan pengalihan otomatis ke Google Sheets jika PIN benar.
