/**
 * ==============================================================================
 * PORTAL EVALUASI & PERFORMANCE APPRAISAL REPORT — BEM FTEIC ITS
 * Biro Personalia & Biro Keorganisasian Kabinet 2026
 * TemplateMo Clearwave Aesthetic Engine
 * ==============================================================================
 */

// 1. DATA SELURUH ANGGOTA KABINET (94 ORANG)
// Menggunakan Nama Departemen & Jabatan Lengkap Resmi (Tanpa Singkatan)
// Dilengkapi Password Personal Masing-Masing Anggota.
// Tautan spreadsheet saat ini berstatus 'On Progress' (akan segera diisi).
const staffList = [
  {
    "id": "staf-001",
    "nama": "Hasan",
    "role": "Kepala Departemen Dalam Negeri",
    "roleCategory": "Pimpinan",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5027231073",
    "asalDepartemen": "Teknologi Informasi",
    "pin": "PecintaKopi",
    "foto": "assets/foto-staf/staf-001.jpg",
    "sheetUrl": "https://docs.google.com/spreadsheets/d/1bCxdPG1rLqV7Il2ALjLsSvSnl8x-QNt7RstkudCPG1E/edit?usp=sharing"
  },
  {
    "id": "staf-002",
    "nama": "Aqila Zahira Naia Puteri Arifin",
    "role": "Wakil Kepala Departemen Dalam Negeri",
    "roleCategory": "Pimpinan",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5025231138",
    "asalDepartemen": "Teknik Informatika",
    "pin": "aqilaazahiragacorwak",
    "foto": "assets/foto-staf/staf-002.jpg",
    "sheetUrl": "https://docs.google.com/spreadsheets/d/1FirPQc8Zk90CKOL4EK2wD7OLO9nnpjuKbVB_Ts8QDzE/edit?usp=sharing"
  },
  {
    "id": "staf-003",
    "nama": "Emmanuela Hosanna Sianturi",
    "role": "Sekretaris Departemen Dalam Negeri",
    "roleCategory": "Sekretaris",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5048241005",
    "asalDepartemen": "Teknik Elektro",
    "pin": "coco",
    "foto": "assets/foto-staf/staf-003.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-004",
    "nama": "Zinedine Zidane Dhanardi",
    "role": "Kabiro Internal",
    "roleCategory": "Kabiro",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5022231028",
    "asalDepartemen": "Teknik Elektro",
    "pin": "pipa tw2",
    "foto": "assets/foto-staf/staf-004.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-005",
    "nama": "Alila Syifa Ramadhani",
    "role": "Kabiro Minat Bakat",
    "roleCategory": "Kabiro",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5023231034",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "cihuy54321",
    "foto": "assets/foto-staf/staf-005.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-006",
    "nama": "Muhammad Assaifunnadhif Alkhifdzi",
    "role": "Staf Dalam Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5023241031",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "nadhifgacor",
    "foto": "assets/foto-staf/staf-006.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-007",
    "nama": "Naufal Nendra Prayata",
    "role": "Staf Dalam Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5048241002",
    "asalDepartemen": "Teknik Elektro",
    "pin": "JuruSelamat",
    "foto": "assets/foto-staf/staf-007.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-008",
    "nama": "Mayda Salma Laila Zahra",
    "role": "Staf Dalam Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5022241214",
    "asalDepartemen": "Teknik Elektro",
    "pin": "Coklat",
    "foto": "assets/foto-staf/staf-008.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-009",
    "nama": "Nashwa Nurcinta M",
    "role": "Staf Dalam Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5023241060",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "Stroberipisang",
    "foto": "assets/foto-staf/staf-009.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-010",
    "nama": "Nafis Faqih Allmuzaky Maolidi",
    "role": "Staf Dalam Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5027241095",
    "asalDepartemen": "Teknologi Informasi",
    "pin": "jerusnipis",
    "foto": "assets/foto-staf/staf-010.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-011",
    "nama": "Nabila Hadi Amadea",
    "role": "Staf Dalam Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5048241047",
    "asalDepartemen": "Teknik Elektro",
    "pin": "nabilahadi!",
    "foto": "assets/foto-staf/staf-011.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-012",
    "nama": "Fathur Ramadhani Nur Rofiq",
    "role": "Staf Dalam Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5026241091",
    "asalDepartemen": "Sistem Informasi",
    "pin": "diklaksonmencelat",
    "foto": "assets/foto-staf/staf-012.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-013",
    "nama": "Ahmad 'Aaqila Akbar",
    "role": "Staf Dalam Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5026241128",
    "asalDepartemen": "Sistem Informasi",
    "pin": "bhaapp",
    "foto": "assets/foto-staf/staf-013.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-014",
    "nama": "Fikri Aulia Husein",
    "role": "Staf Dalam Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5048241070",
    "asalDepartemen": "Teknik Elektro",
    "pin": "JamesSiPendekar",
    "foto": "assets/foto-staf/staf-014.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-015",
    "nama": "Jeff Rehobot Hasian L Gaol",
    "role": "Staf Dalam Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "DAGRI",
    "departemenBEMFull": "Dalam Negeri",
    "nrp": "5024241073",
    "asalDepartemen": "Teknik Komputer",
    "pin": "howbot",
    "foto": "assets/foto-staf/staf-015.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-016",
    "nama": "Jeremia Kevin Alexander Jagardo Malau",
    "role": "Kepala Departemen Pengembangan Sumber Daya Manusia",
    "roleCategory": "Pimpinan",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5054231027",
    "asalDepartemen": "Teknik Informatika",
    "pin": "ayoberantemsatusatu",
    "foto": "assets/foto-staf/staf-016.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-017",
    "nama": "Annisa Retno Kurniasari",
    "role": "Wakil Kepala Departemen Pengembangan Sumber Daya Manusia",
    "roleCategory": "Pimpinan",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5022231008",
    "asalDepartemen": "Teknik Elektro",
    "pin": "enopsdm",
    "foto": "assets/foto-staf/staf-017.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-018",
    "nama": "Alya Hasna Fadilah",
    "role": "Sekretaris Departemen Pengembangan Sumber Daya Manusia",
    "roleCategory": "Sekretaris",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5024241044",
    "asalDepartemen": "Teknik Komputer",
    "pin": "meloidx",
    "foto": "assets/foto-staf/staf-018.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-019",
    "nama": "Missy Tiffaini Novlensia Sinaga",
    "role": "Kabiro Event",
    "roleCategory": "Kabiro",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5026231014",
    "asalDepartemen": "Sistem Informasi",
    "pin": "missytiffainipsdm",
    "foto": "https://ui-avatars.com/api/?name=Missy+Tiffaini+Novlensia+Sinaga&background=1D536B&color=fff&size=200&bold=true",
    "sheetUrl": ""
  },
  {
    "id": "staf-020",
    "nama": "Theo Kawalisa Pinem",
    "role": "Kabiro Kaderisasi",
    "roleCategory": "Kabiro",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5024231008",
    "asalDepartemen": "Teknik Komputer",
    "pin": "theooopsdm",
    "foto": "assets/foto-staf/staf-020.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-021",
    "nama": "Fika Arka Nuriyah",
    "role": "Staf Pengembangan Sumber Daya Manusia",
    "roleCategory": "Staff",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5027241071",
    "asalDepartemen": "Teknologi Informasi",
    "pin": "piscok",
    "foto": "assets/foto-staf/staf-021.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-022",
    "nama": "Syaira Azzahra Salsabila",
    "role": "Staf Pengembangan Sumber Daya Manusia",
    "roleCategory": "Staff",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5023241028",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "pawpaw",
    "foto": "assets/foto-staf/staf-022.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-023",
    "nama": "Andrya Sausan Salsabila",
    "role": "Staf Pengembangan Sumber Daya Manusia",
    "roleCategory": "Staff",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5048241043",
    "asalDepartemen": "Teknik Elektro",
    "pin": "pecintapisangijo_06",
    "foto": "assets/foto-staf/staf-023.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-024",
    "nama": "Munazalaty Zahwa Ahyari Suudiyah",
    "role": "Staf Pengembangan Sumber Daya Manusia",
    "roleCategory": "Staff",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5023241061",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "Pompomarine",
    "foto": "assets/foto-staf/staf-024.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-025",
    "nama": "Himawan Rakha Bhadra",
    "role": "Staf Pengembangan Sumber Daya Manusia",
    "roleCategory": "Staff",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5025241028",
    "asalDepartemen": "Teknik Informatika",
    "pin": "SMWADA",
    "foto": "assets/foto-staf/staf-025.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-026",
    "nama": "Mochammad Irfan Sandy",
    "role": "Staf Pengembangan Sumber Daya Manusia",
    "roleCategory": "Staff",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5025241127",
    "asalDepartemen": "Teknik Informatika",
    "pin": "Fox",
    "foto": "assets/foto-staf/staf-026.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-027",
    "nama": "Justin Issac Siregar",
    "role": "Staf Pengembangan Sumber Daya Manusia",
    "roleCategory": "Staff",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5022241171",
    "asalDepartemen": "Teknik Elektro",
    "pin": "O2Reings",
    "foto": "assets/foto-staf/staf-027.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-028",
    "nama": "Rasya Izza Maira",
    "role": "Staf Pengembangan Sumber Daya Manusia",
    "roleCategory": "Staff",
    "departemenBEM": "PSDM",
    "departemenBEMFull": "Pengembangan Sumber Daya Manusia",
    "nrp": "5022241075",
    "asalDepartemen": "Teknik Elektro",
    "pin": "Buritos",
    "foto": "assets/foto-staf/staf-028.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-029",
    "nama": "KEINDRA DANTE HIDAYAT",
    "role": "Kepala Departemen Riset dan Teknologi",
    "roleCategory": "Pimpinan",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5022231236",
    "asalDepartemen": "Teknik Elektro",
    "pin": "keindraotwlulus",
    "foto": "assets/foto-staf/staf-029.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-030",
    "nama": "JANICE KAYLEEN ELIANA SEMBIRING BRAHMANA",
    "role": "Wakil Kepala Departemen Riset dan Teknologi",
    "roleCategory": "Pimpinan",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5048231070",
    "asalDepartemen": "Teknik Elektro",
    "pin": "janicerizztech",
    "foto": "assets/foto-staf/staf-030.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-031",
    "nama": "M. Rafli Al Mutawakkil",
    "role": "Sekretaris Departemen Riset dan Teknologi",
    "roleCategory": "Sekretaris",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5048241080",
    "asalDepartemen": "Teknik Elektro",
    "pin": "TuaBangka1",
    "foto": "assets/foto-staf/staf-031.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-032",
    "nama": "Alifia Zabrina Putri",
    "role": "Kabiro Pengembangan",
    "roleCategory": "Kabiro",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5023231016",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "Yaya",
    "foto": "assets/foto-staf/staf-032.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-033",
    "nama": "Einstein Pio Hutasoit",
    "role": "Kabiro Kajian",
    "roleCategory": "Kabiro",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5022231159",
    "asalDepartemen": "Teknik Elektro",
    "pin": "einsteinsanglegend",
    "foto": "assets/foto-staf/staf-033.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-034",
    "nama": "Alvia Marisa",
    "role": "Staf Riset dan Teknologi",
    "roleCategory": "Staff",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5023241064",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "user",
    "foto": "assets/foto-staf/staf-034.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-035",
    "nama": "Nasywa Raida",
    "role": "Staf Riset dan Teknologi",
    "roleCategory": "Staff",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5023241065",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "Mihu",
    "foto": "assets/foto-staf/staf-035.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-036",
    "nama": "Azka Razaqqi Irnantyo",
    "role": "Staf Riset dan Teknologi",
    "roleCategory": "Staff",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5022241200",
    "asalDepartemen": "Teknik Elektro",
    "pin": "akucintamasEinstein",
    "foto": "assets/foto-staf/staf-036.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-037",
    "nama": "Mohammad Farrel Firzatullah",
    "role": "Staf Riset dan Teknologi",
    "roleCategory": "Staff",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5022241183",
    "asalDepartemen": "Teknik Elektro",
    "pin": "Raflisekdep",
    "foto": "assets/foto-staf/staf-037.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-038",
    "nama": "Elvaretta Khiara Salsabilla",
    "role": "Staf Riset dan Teknologi",
    "roleCategory": "Staff",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5023241086",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "Miawmaomeow",
    "foto": "assets/foto-staf/staf-038.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-039",
    "nama": "Asyifa Abida Rosjadi",
    "role": "Staf Riset dan Teknologi",
    "roleCategory": "Staff",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5048241054",
    "asalDepartemen": "Teknik Elektro",
    "pin": "Ok",
    "foto": "assets/foto-staf/staf-039.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-040",
    "nama": "Charity Almas Kolibri Harianja",
    "role": "Staf Riset dan Teknologi",
    "roleCategory": "Staff",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5048241075",
    "asalDepartemen": "Teknik Elektro",
    "pin": "el ciloko",
    "foto": "assets/foto-staf/staf-040.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-041",
    "nama": "Muhammad Zaki Firdausi Fuady",
    "role": "Staf Riset dan Teknologi",
    "roleCategory": "Staff",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5022241110",
    "asalDepartemen": "Teknik Elektro",
    "pin": "akucintaEinstein",
    "foto": "assets/foto-staf/staf-041.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-042",
    "nama": "Faris Aribowo Suwardi",
    "role": "Staf Riset dan Teknologi",
    "roleCategory": "Staff",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5022241155",
    "asalDepartemen": "Teknik Elektro",
    "pin": "IsThatSo??",
    "foto": "assets/foto-staf/staf-042.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-043",
    "nama": "Viola Herlina Wati",
    "role": "Staf Riset dan Teknologi",
    "roleCategory": "Staff",
    "departemenBEM": "RISTEK",
    "departemenBEMFull": "Riset dan Teknologi",
    "nrp": "5048241031",
    "asalDepartemen": "Teknik Elektro",
    "pin": "bleki",
    "foto": "assets/foto-staf/staf-043.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-044",
    "nama": "Nafadiya Mumtaza",
    "role": "Kepala Departemen Sosial Masyarakat",
    "roleCategory": "Pimpinan",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5051231012",
    "asalDepartemen": "Sistem Informasi",
    "pin": "nafasosmasgacor",
    "foto": "assets/foto-staf/staf-044.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-045",
    "nama": "Keisha Adisti Athaillah",
    "role": "Wakil Kepala Departemen Sosial Masyarakat",
    "roleCategory": "Pimpinan",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5026231137",
    "asalDepartemen": "Sistem Informasi",
    "pin": "keishasosmas",
    "foto": "assets/foto-staf/staf-045.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-046",
    "nama": "Efan Ramdhani",
    "role": "Kabiro Kajian",
    "roleCategory": "Kabiro",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5054231017",
    "asalDepartemen": "Teknik Informatika",
    "pin": "efanganteng",
    "foto": "assets/foto-staf/staf-046.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-047",
    "nama": "M. Hidayaturrahman",
    "role": "Kabiro Pengmas",
    "roleCategory": "Kabiro",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5048231057",
    "asalDepartemen": "Teknik Elektro",
    "pin": "jojo",
    "foto": "assets/foto-staf/staf-047.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-048",
    "nama": "ALIF AS`AD RAMADHAN",
    "role": "Kabiro Edukasi",
    "roleCategory": "Kabiro",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5054231007",
    "asalDepartemen": "Teknik Informatika",
    "pin": "alifwerrr",
    "foto": "assets/foto-staf/staf-048.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-049",
    "nama": "Ajeng Nadya Arofani",
    "role": "Sekretaris Departemen",
    "roleCategory": "Sekretaris",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5048241058",
    "asalDepartemen": "Teknik Elektro",
    "pin": "Baksobio",
    "foto": "assets/foto-staf/staf-049.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-050",
    "nama": "Muhammad Sandhika Setiawan",
    "role": "Staf Sosial Masyarakat",
    "roleCategory": "Staff",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5026241043",
    "asalDepartemen": "Sistem Informasi",
    "pin": "Ryukennnn",
    "foto": "assets/foto-staf/staf-050.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-051",
    "nama": "Annisa Fathinatuzzahra",
    "role": "Staf Sosial Masyarakat",
    "roleCategory": "Staff",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5048241030",
    "asalDepartemen": "Teknik Elektro",
    "pin": "Nisza",
    "foto": "assets/foto-staf/staf-051.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-052",
    "nama": "Nayara Aldevida",
    "role": "Staf Sosial Masyarakat",
    "roleCategory": "Staff",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5022241153",
    "asalDepartemen": "Teknik Elektro",
    "pin": "sicantik",
    "foto": "assets/foto-staf/staf-052.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-053",
    "nama": "Riyannizaar Dwi Amarullah",
    "role": "Staf Sosial Masyarakat",
    "roleCategory": "Staff",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5025241121",
    "asalDepartemen": "Teknik Informatika",
    "pin": "amar",
    "foto": "assets/foto-staf/staf-053.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-054",
    "nama": "Muhammad Agha Avicenna",
    "role": "Staf Sosial Masyarakat",
    "roleCategory": "Staff",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5022241192",
    "asalDepartemen": "Teknik Elektro",
    "pin": "aghapelari",
    "foto": "assets/foto-staf/staf-054.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-055",
    "nama": "Sylvina Syah Fitri",
    "role": "Staf Sosial Masyarakat",
    "roleCategory": "Staff",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5023241084",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "Miere",
    "foto": "assets/foto-staf/staf-055.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-056",
    "nama": "Muhammad Luthfi Irfani",
    "role": "Staf Sosial Masyarakat",
    "roleCategory": "Staff",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5022241174",
    "asalDepartemen": "Teknik Elektro",
    "pin": "X’Ray",
    "foto": "assets/foto-staf/staf-056.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-057",
    "nama": "Ernest Hamonangan Hutapea",
    "role": "Staf Sosial Masyarakat",
    "roleCategory": "Staff",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5022241151",
    "asalDepartemen": "Teknik Elektro",
    "pin": "mngni",
    "foto": "assets/foto-staf/staf-057.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-058",
    "nama": "Theresia Ivona Priska Hamananerming Mahal",
    "role": "Staf Sosial Masyarakat",
    "roleCategory": "Staff",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5048241077",
    "asalDepartemen": "Teknik Elektro",
    "pin": "theresia.ivona",
    "foto": "assets/foto-staf/staf-058.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-059",
    "nama": "Swinsty Quen Sella Pratasis",
    "role": "Staf Sosial Masyarakat",
    "roleCategory": "Staff",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5022241255",
    "asalDepartemen": "Teknik Elektro",
    "pin": "malik",
    "foto": "assets/foto-staf/staf-059.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-060",
    "nama": "Syahdu Szenovera Maharani",
    "role": "Staf Sosial Masyarakat",
    "roleCategory": "Staff",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5026241038",
    "asalDepartemen": "Sistem Informasi",
    "pin": "Bebas",
    "foto": "assets/foto-staf/staf-060.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-061",
    "nama": "Gabriel Nathan Simanungkalit",
    "role": "Staf Sosial Masyarakat",
    "roleCategory": "Staff",
    "departemenBEM": "SOSMAS",
    "departemenBEMFull": "Sosial Masyarakat",
    "nrp": "5023241075",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "mangeak",
    "foto": "assets/foto-staf/staf-061.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-062",
    "nama": "Muhammad Rizqi Fadhlurrahman",
    "role": "Kepala Departemen Luar Negeri",
    "roleCategory": "Pimpinan",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5048231009",
    "asalDepartemen": "Teknik Elektro",
    "pin": "fadhilpemburucinta",
    "foto": "assets/foto-staf/staf-062.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-063",
    "nama": "Widya Firdausi Ahla Samariansyah",
    "role": "Wakil Kepala Departemen Luar Negeri",
    "roleCategory": "Pimpinan",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5048231059",
    "asalDepartemen": "Teknik Elektro",
    "pin": "widyallugrigacor",
    "foto": "assets/foto-staf/staf-063.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-064",
    "nama": "Muhamad Razka Pramata",
    "role": "Kabiro Medfo",
    "roleCategory": "Kabiro",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5022231247",
    "asalDepartemen": "Teknik Elektro",
    "pin": "razkaahliediting",
    "foto": "assets/foto-staf/staf-064.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-065",
    "nama": "Razzan Yozha Putra",
    "role": "Kabiro Hublu",
    "roleCategory": "Kabiro",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5054231026",
    "asalDepartemen": "Teknik Informatika",
    "pin": "rajanabangnyadentyo",
    "foto": "assets/foto-staf/staf-065.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-066",
    "nama": "Nindita Putri Aisyah",
    "role": "Sekretaris Departemen",
    "roleCategory": "Sekretaris",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5048241003",
    "asalDepartemen": "Teknik Elektro",
    "pin": "ninditaputri_",
    "foto": "assets/foto-staf/staf-066.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-067",
    "nama": "Darlene Syarafina Wyanetta",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5023241029",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "Chiowu",
    "foto": "assets/foto-staf/staf-067.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-068",
    "nama": "Bagas Aryo Dananjoyo",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5024241031",
    "asalDepartemen": "Teknik Komputer",
    "pin": "Sasageyou",
    "foto": "assets/foto-staf/staf-068.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-069",
    "nama": "Tabina Fayola Zalianty",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5048241032",
    "asalDepartemen": "Teknik Elektro",
    "pin": "obhcombisachet",
    "foto": "assets/foto-staf/staf-069.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-070",
    "nama": "Dzaky Haady",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5024241076",
    "asalDepartemen": "Teknik Komputer",
    "pin": "hany",
    "foto": "assets/foto-staf/staf-070.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-071",
    "nama": "Iqbal Aflah Al Farisi",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5022241189",
    "asalDepartemen": "Teknik Elektro",
    "pin": "iqbalfarisi",
    "foto": "assets/foto-staf/staf-071.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-072",
    "nama": "Muhammad Faiz Alfangie",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5022241150",
    "asalDepartemen": "Teknik Elektro",
    "pin": "RV.1211",
    "foto": "assets/foto-staf/staf-072.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-073",
    "nama": "Elmira Araminta Tansy",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5024241099",
    "asalDepartemen": "Teknik Komputer",
    "pin": "stressedel",
    "foto": "assets/foto-staf/staf-073.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-074",
    "nama": "Amellya Rashida Shabirah Putri",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5023241003",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "penghunitw2",
    "foto": "assets/foto-staf/staf-074.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-075",
    "nama": "Nobel Hans Valentino Sinaga",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5022241159",
    "asalDepartemen": "Teknik Elektro",
    "pin": "beabadoobee",
    "foto": "assets/foto-staf/staf-075.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-076",
    "nama": "Adelia Zahrasanti Bintoro",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5048241028",
    "asalDepartemen": "Teknik Elektro",
    "pin": "tahugorenk",
    "foto": "assets/foto-staf/staf-076.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-077",
    "nama": "Valerine Marcella Rau",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5048241049",
    "asalDepartemen": "Teknik Elektro",
    "pin": "Kecebong",
    "foto": "assets/foto-staf/staf-077.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-078",
    "nama": "Naufal Akmal Muzakki",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5022241135",
    "asalDepartemen": "Teknik Elektro",
    "pin": "KipasAngin",
    "foto": "assets/foto-staf/staf-078.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-079",
    "nama": "Chenata Andara Imansyah",
    "role": "Staf Luar Negeri",
    "roleCategory": "Staff",
    "departemenBEM": "LUGRI",
    "departemenBEMFull": "Luar Negeri",
    "nrp": "5048241040",
    "asalDepartemen": "Teknik Elektro",
    "pin": "DewaaaKapas",
    "foto": "assets/foto-staf/staf-079.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-080",
    "nama": "Moh. Rafi Agustian",
    "role": "Kepala Departemen Kewirausahaan",
    "roleCategory": "Pimpinan",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5022231158",
    "asalDepartemen": "Teknik Elektro",
    "pin": "Jendela Waktu",
    "foto": "assets/foto-staf/staf-080.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-081",
    "nama": "Ahmad Rifqi Radifan",
    "role": "Wakil Kepala Departemen Kewirausahaan",
    "roleCategory": "Pimpinan",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5022231168",
    "asalDepartemen": "Teknik Elektro",
    "pin": "kudanilemas",
    "foto": "assets/foto-staf/staf-081.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-082",
    "nama": "Astrid Meilendra",
    "role": "Kabiro Ekraf",
    "roleCategory": "Kabiro",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5026231183",
    "asalDepartemen": "Sistem Informasi",
    "pin": "Blubub",
    "foto": "assets/foto-staf/staf-082.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-083",
    "nama": "Ramandita Ahmad Saguna",
    "role": "Kabiro Event",
    "roleCategory": "Kabiro",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5054231005",
    "asalDepartemen": "Teknik Informatika",
    "pin": "Mantao",
    "foto": "https://ui-avatars.com/api/?name=Ramandita+Ahmad+Saguna&background=1D536B&color=fff&size=200&bold=true",
    "sheetUrl": ""
  },
  {
    "id": "staf-084",
    "nama": "Brena Sio Artha Josiana",
    "role": "Sekretaris Departemen",
    "roleCategory": "Sekretaris",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5023241093",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "rawr",
    "foto": "assets/foto-staf/staf-084.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-085",
    "nama": "Nabil Athalafirja Dharmawan",
    "role": "Staf Kewirausahaan",
    "roleCategory": "Staff",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5026241182",
    "asalDepartemen": "Sistem Informasi",
    "pin": "kalkulus2",
    "foto": "assets/foto-staf/staf-085.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-086",
    "nama": "Nayaka Shafarrel Razaan Nalaprassya",
    "role": "Staf Kewirausahaan",
    "roleCategory": "Staff",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5024241057",
    "asalDepartemen": "Teknik Komputer",
    "pin": "faraam",
    "foto": "assets/foto-staf/staf-086.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-087",
    "nama": "Oscaryavat Viryavan",
    "role": "Staf Kewirausahaan",
    "roleCategory": "Staff",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5027241053",
    "asalDepartemen": "Teknologi Informasi",
    "pin": "Oscar",
    "foto": "assets/foto-staf/staf-087.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-088",
    "nama": "Aisyah Salma Alifia",
    "role": "Staf Kewirausahaan",
    "roleCategory": "Staff",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5048241079",
    "asalDepartemen": "Teknik Elektro",
    "pin": "lmlvyy",
    "foto": "assets/foto-staf/staf-088.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-089",
    "nama": "Abdul mahdy mappincara",
    "role": "Staf Kewirausahaan",
    "roleCategory": "Staff",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5022241201",
    "asalDepartemen": "Teknik Elektro",
    "pin": "capt.A",
    "foto": "assets/foto-staf/staf-089.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-090",
    "nama": "Zevanya Maghviranov Pramono",
    "role": "Staf Kewirausahaan",
    "roleCategory": "Staff",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5048241056",
    "asalDepartemen": "Teknik Elektro",
    "pin": "zevanyacantik",
    "foto": "assets/foto-staf/staf-090.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-091",
    "nama": "Denis Zaidan Zaki Arrafi",
    "role": "Staf Kewirausahaan",
    "roleCategory": "Staff",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5022241138",
    "asalDepartemen": "Teknik Elektro",
    "pin": "remotAC",
    "foto": "assets/foto-staf/staf-091.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-092",
    "nama": "Nabilla Salsa Pramuditya",
    "role": "Staf Kewirausahaan",
    "roleCategory": "Staff",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5023241049",
    "asalDepartemen": "Teknik Biomedik",
    "pin": "nagitaslavina26",
    "foto": "assets/foto-staf/staf-092.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-093",
    "nama": "Aurelyo Nouvabryano Akhmad",
    "role": "Staf Kewirausahaan",
    "roleCategory": "Staff",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5026241175",
    "asalDepartemen": "Sistem Informasi",
    "pin": "Michael",
    "foto": "assets/foto-staf/staf-093.jpg",
    "sheetUrl": ""
  },
  {
    "id": "staf-094",
    "nama": "Firdaus Ahnaf Hasbullah",
    "role": "Staf Kewirausahaan",
    "roleCategory": "Staff",
    "departemenBEM": "KWU",
    "departemenBEMFull": "Kewirausahaan",
    "nrp": "5022241084",
    "asalDepartemen": "Teknik Elektro",
    "pin": "NasiKebuli",
    "foto": "assets/foto-staf/staf-094.jpg",
    "sheetUrl": ""
  }
];

// State Management
let activeFilter = 'all';
let searchQuery = '';
let currentSelectedStaff = null;
let isPasswordVisible = false;

// 2. INITIALIZATION ROUTINE
function initApp() {
  updateCounts();
  renderStaffGrid();
  initNavScroll();
  initMobileMenu();
  initFaqAccordion();
  initStatCounters();
  initScrollReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// 3. STATS & BADGE COUNTS
function updateCounts() {
  const total = staffList.length;
  const countAllEl = document.getElementById("countAll");
  if (countAllEl) countAllEl.innerText = total;

  const depts = ['DAGRI', 'PSDM', 'RISTEK', 'SOSMAS', 'LUGRI', 'KWU'];
  depts.forEach(d => {
    const el = document.getElementById(`count_${d}`);
    if (el) {
      el.innerText = staffList.filter(s => s.departemenBEM === d).length;
    }
  });

  const statTotalEl = document.getElementById("statTotalStaff");
  if (statTotalEl) statTotalEl.innerText = total;
}

// 4. FILTER & SEARCH LOGIC
function getFilteredStaff() {
  return staffList.filter(staff => {
    const matchFilter = activeFilter === 'all' || staff.departemenBEM === activeFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q ||
      staff.nama.toLowerCase().includes(q) ||
      staff.role.toLowerCase().includes(q) ||
      staff.nrp.includes(q) ||
      staff.departemenBEM.toLowerCase().includes(q) ||
      (staff.departemenBEMFull && staff.departemenBEMFull.toLowerCase().includes(q)) ||
      staff.asalDepartemen.toLowerCase().includes(q);

    return matchFilter && matchSearch;
  });
}

function getDeptBadgeClass(dept) {
  const map = {
    'DAGRI': 'dept-dagri',
    'PSDM': 'dept-psdm',
    'RISTEK': 'dept-ristek',
    'SOSMAS': 'dept-sosmas',
    'LUGRI': 'dept-lugri',
    'KWU': 'dept-kwu'
  };
  return map[dept] || 'dept-default';
}

function getRoleBadge(role, cat) {
  if (cat === 'Pimpinan') {
    const isBadan = role.includes('Badan');
    return `<span class="pill-role pill-kadep"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> ${isBadan ? 'Kepala Badan' : 'Kepala Dept'}</span>`;
  } else if (cat === 'Wakil Pimpinan') {
    const isBadan = role.includes('Badan');
    return `<span class="pill-role pill-wakadep"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> ${isBadan ? 'Wakil Kepala Badan' : 'Wakil Kepala Dept'}</span>`;
  } else if (cat === 'Kabiro') {
    return `<span class="pill-role pill-kabiro"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> Kepala Biro</span>`;
  } else if (cat === 'Sekretaris') {
    return `<span class="pill-role pill-sekdep"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg> Sekretaris</span>`;
  } else {
    return `<span class="pill-role pill-staff">Staf</span>`;
  }
}

// 5. RENDER GRID KARTU ANGGOTA
// Didesain presisi & sejajar (Avatar, 2-baris Badges, 2-baris Nama, 2-baris Jabatan, Meta NRP & Dept, CTA Button)
function renderStaffGrid() {
  const gridContainer = document.getElementById("staffGrid");
  const emptyState = document.getElementById("emptyState");

  if (!gridContainer) return;

  const filtered = getFilteredStaff();
  gridContainer.innerHTML = "";

  if (filtered.length === 0) {
    gridContainer.classList.add("hidden");
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  gridContainer.classList.remove("hidden");
  if (emptyState) emptyState.classList.add("hidden");

  filtered.forEach(staff => {
    const deptBadgeClass = getDeptBadgeClass(staff.departemenBEM);
    const roleBadgeHtml = getRoleBadge(staff.role, staff.roleCategory);
    const isLeadership = staff.roleCategory === 'Pimpinan' || staff.roleCategory === 'Wakil Pimpinan';
    const deptFullName = staff.departemenBEMFull || staff.departemenBEM;

    const card = document.createElement("div");
    card.className = `staff-card ${isLeadership ? 'card-leadership' : ''}`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Akses Performance Appraisal Report untuk ${staff.nama}`);

    card.onclick = () => openModal(staff);
    card.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(staff);
      }
    };

    const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(staff.nama)}&background=1D536B&color=fff&size=200&bold=true`;

    card.innerHTML = `
      <div class="card-avatar-wrap">
        <img 
          src="${staff.foto}" 
          alt="${staff.nama}" 
          class="card-avatar-img" 
          loading="lazy" 
          onerror="this.src='${fallbackAvatar}'"
        />
        <div class="card-avatar-status" title="Aktif"></div>
      </div>

      <div class="card-badges">
        <span class="pill-dept ${deptBadgeClass}" title="${deptFullName}">
          ${deptFullName}
        </span>
        ${roleBadgeHtml}
      </div>

      <h3 class="card-name" title="${staff.nama}">${staff.nama}</h3>
      <p class="card-role" title="${staff.role}">${staff.role}</p>

      <div class="card-meta">
        <span class="card-nrp">NRP: ${staff.nrp}</span>
        <span class="card-dept" title="${staff.asalDepartemen}">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: -1px; margin-right: 3px;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>${staff.asalDepartemen}
        </span>
      </div>

      <button type="button" class="card-cta">
        <span>Buka Performance Appraisal Report</span>
        <span>→</span>
      </button>
    `;

    gridContainer.appendChild(card);
  });
}

// 6. FILTER & SEARCH HANDLERS
function setFilter(dept) {
  activeFilter = dept;

  const buttons = document.querySelectorAll("#filterTabs .filter-pill");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-filter") === dept) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderStaffGrid();
}

function handleSearch(val) {
  searchQuery = val;
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) {
    clearBtn.style.display = val.trim() ? "flex" : "none";
  }
  renderStaffGrid();
}

function clearSearchInput() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  if (input) input.value = "";
  if (clearBtn) clearBtn.style.display = "none";
  searchQuery = "";
  renderStaffGrid();
  if (input) input.focus();
}

function resetAllFilters() {
  clearSearchInput();
  setFilter('all');
}

// 7. PIN & PASSWORD AUTHENTICATION MODAL
function openModal(staff) {
  currentSelectedStaff = staff;

  const modal = document.getElementById("passwordModal");
  const modalName = document.getElementById("modalName");
  const modalRole = document.getElementById("modalRole");
  const modalAvatar = document.getElementById("modalAvatar");
  const modalBiroTag = document.getElementById("modalBiroTag");
  const modalNrpTag = document.getElementById("modalNrpTag");
  const staffPin = document.getElementById("staffPin");
  const errorMessage = document.getElementById("errorMessage");
  const successMessage = document.getElementById("successMessage");
  const submitBtn = document.getElementById("submitBtn");
  const authForm = document.getElementById("authForm");
  const progressState = document.getElementById("progressState");
  const modalProfile = document.querySelector(".modal-profile");

  if (!modal) return;

  // Reset modal display state
  if (authForm) authForm.classList.remove("hidden");
  if (modalProfile) modalProfile.classList.remove("hidden");
  if (progressState) progressState.classList.add("hidden");

  if (modalName) modalName.innerText = staff.nama;
  if (modalRole) modalRole.innerText = `${staff.role} • ${staff.asalDepartemen}`;
  if (modalNrpTag) modalNrpTag.innerText = `NRP: ${staff.nrp}`;

  if (modalAvatar) {
    modalAvatar.src = staff.foto;
    modalAvatar.onerror = function() {
      this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(staff.nama)}&background=1D536B&color=fff&size=200&bold=true`;
    };
  }

  if (modalBiroTag) {
    modalBiroTag.innerText = staff.departemenBEMFull || staff.departemenBEM;
    modalBiroTag.className = `modal-biro-tag ${getDeptBadgeClass(staff.departemenBEM)}`;
  }

  if (staffPin) {
    staffPin.value = "";
    staffPin.type = "password";
  }
  isPasswordVisible = false;
  updateEyeIcon();

  if (errorMessage) errorMessage.classList.add("hidden");
  if (successMessage) successMessage.classList.add("hidden");
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerText = "Buka Performance Appraisal Report";
  }

  modal.classList.remove("hidden");
  setTimeout(() => {
    if (staffPin) staffPin.focus();
  }, 50);
}

function closeModal() {
  const modal = document.getElementById("passwordModal");
  if (modal) modal.classList.add("hidden");

  const authForm = document.getElementById("authForm");
  const progressState = document.getElementById("progressState");
  const modalProfile = document.querySelector(".modal-profile");

  if (authForm) authForm.classList.remove("hidden");
  if (modalProfile) modalProfile.classList.remove("hidden");
  if (progressState) progressState.classList.add("hidden");

  currentSelectedStaff = null;
}

function togglePasswordVisibility() {
  const staffPin = document.getElementById("staffPin");
  if (!staffPin) return;

  isPasswordVisible = !isPasswordVisible;
  staffPin.type = isPasswordVisible ? "text" : "password";
  updateEyeIcon();
  staffPin.focus();
}

function updateEyeIcon() {
  const btn = document.getElementById("togglePasswordBtn");
  if (btn) {
    btn.innerHTML = isPasswordVisible
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
  }
}

function handleVerifyPassword(event) {
  event.preventDefault();
  const staffPin = document.getElementById("staffPin");
  const errorMessage = document.getElementById("errorMessage");
  const successMessage = document.getElementById("successMessage");
  const submitBtn = document.getElementById("submitBtn");
  const modalContainer = document.getElementById("modalContainer");

  if (!staffPin || !currentSelectedStaff) return;

  const entered = staffPin.value.trim();

  // VERIFIKASI PASSWORD
  // Mencocokkan dengan password resmi (case-insensitive / trimmed)
  // Cadangan darurat: 4-digit akhir NRP atau full NRP
  const last4Nrp = currentSelectedStaff.nrp.slice(-4);
  const isMatch = (entered === currentSelectedStaff.pin) || 
                  (entered.toLowerCase() === currentSelectedStaff.pin.toLowerCase()) ||
                  (entered === last4Nrp) || 
                  (entered === currentSelectedStaff.nrp);

  if (isMatch) {
    // PASSWORD BENAR
    if (errorMessage) errorMessage.classList.add("hidden");

    // Cek apakah tautan spreadsheet resmi sudah tersedia
    const hasValidSheet = currentSelectedStaff.sheetUrl && 
                          currentSelectedStaff.sheetUrl.trim() !== '' && 
                          !currentSelectedStaff.sheetUrl.includes('on-progress') &&
                          currentSelectedStaff.sheetUrl.startsWith('http');

    if (hasValidSheet) {
      if (successMessage) successMessage.classList.remove("hidden");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Membuka Sheet...";
      }

      showToast("Akses Diberikan", `Membuka lembar evaluasi ${currentSelectedStaff.nama}...`);

      setTimeout(() => {
        window.open(currentSelectedStaff.sheetUrl, "_blank", "noopener,noreferrer");
        closeModal();
      }, 700);

    } else {
      // Tautan masih on progress (sesuai instruksi)
      // Tampilkan state On Progress di modal tanpa membuka tab baru
      const authForm = document.getElementById("authForm");
      const progressState = document.getElementById("progressState");
      const progressStaffName = document.getElementById("progressStaffName");
      const modalProfile = document.querySelector(".modal-profile");

      if (authForm) authForm.classList.add("hidden");
      if (modalProfile) modalProfile.classList.add("hidden");
      if (progressStaffName) progressStaffName.innerText = currentSelectedStaff.nama;
      if (progressState) progressState.classList.remove("hidden");

      showToast("Password Benar", `Status Performance Appraisal ${currentSelectedStaff.nama}: On Progress`);
    }

  } else {
    // PASSWORD SALAH
    if (errorMessage) errorMessage.classList.remove("hidden");
    if (successMessage) successMessage.classList.add("hidden");

    if (modalContainer) {
      modalContainer.classList.add("shake-anim");
      setTimeout(() => {
        modalContainer.classList.remove("shake-anim");
      }, 500);
    }

    staffPin.select();
    staffPin.focus();
  }
}

function openLupaPinHelp() {
  showToast("Bantuan Akses PIN", "Silakan hubungi rekan Biro Personalia BEM FTEIC ITS atau DM Instagram @bemfteic.its untuk bantuan verifikasi dan pemulihan PIN personal Anda.");
}

// 8. TOAST NOTIFICATION
function showToast(title, message) {
  const toast = document.getElementById("toastNotification");
  const toastTitle = document.getElementById("toastTitle");
  const toastMessage = document.getElementById("toastMessage");

  if (!toast) return;

  if (toastTitle) toastTitle.innerText = title;
  if (toastMessage) toastMessage.innerText = message;

  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3500);
}

// 9. FAQ ACCORDION
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  let allOpen = false;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open', !isOpen);
      question.setAttribute('aria-expanded', !isOpen);
    });

    question.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isOpen = item.classList.contains('open');
        item.classList.toggle('open', !isOpen);
        question.setAttribute('aria-expanded', !isOpen);
      }
    });
  });

  const faqToggleAllBtn = document.getElementById('faqToggleAll');
  const faqToggleIcon = document.getElementById('faqToggleIcon');

  if (faqToggleAllBtn) {
    faqToggleAllBtn.addEventListener('click', () => {
      allOpen = !allOpen;
      faqItems.forEach(item => {
        item.classList.toggle('open', allOpen);
        const q = item.querySelector('.faq-question');
        if (q) q.setAttribute('aria-expanded', String(allOpen));
      });
      if (faqToggleIcon) faqToggleIcon.textContent = allOpen ? '−' : '+';
      faqToggleAllBtn.lastChild.textContent = allOpen ? ' Tutup Semua' : ' Buka Semua';
    });
  }
}

// 10. STATS ANIMATED COUNTER
function initStatCounters() {
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const duration = 1400;
    const start = performance.now();
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const val = eased * target;
      el.textContent = Math.floor(val);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  const statNums = document.querySelectorAll('.stat-num');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.stat-num').forEach(animateCounter);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const grid = document.querySelector('.stats-grid');
    if (grid) observer.observe(grid);
  } else {
    statNums.forEach(animateCounter);
  }
}

// 11. NAVBAR SCROLL
function initNavScroll() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// 12. MOBILE MENU
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Global modal dismiss on ESC & backdrop click
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

const modalOverlay = document.getElementById('passwordModal');
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}

// ── MAGIC UI: MAGIC CARD SPOTLIGHT GLOW ──
document.addEventListener('mousemove', (e) => {
  const card = e.target.closest('.staff-card, .magic-bento-card, .proker-card, .sop-insight-card, .bps-bureau-card, .framework-card, .okr-card, .team-showcase-card, .magic-terminal-card');
  if (card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }
});

// 13. SCROLL REVEAL (MAGIC UI BLUR-FADE)
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -25px 0px'
  });

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('in-view');
    } else {
      observer.observe(el);
    }
  });
}

