export const langHelpers = {
  getLang() { try { return localStorage.getItem('lwj_lang') || 'id'; } catch (e) { return 'id'; } },
  setLang(l) { try { localStorage.setItem('lwj_lang', l); } catch (e) {} }
};

export const tags = {
  cyber: ['Jaringan', 'Malware', 'Threat Intel', 'Defense'],
  webdev: ['Frontend', 'Backend', 'API', 'Database'],
  webdesign: ['UI', 'UX', 'Layout', 'Tipografi'],
  kali: ['Instalasi', 'Konfigurasi', 'Tools', 'Tips'],
  pentest: ['Recon', 'Eksploitasi', 'Web App', 'Report'],
  github: ['Git Dasar', 'Branching', 'Collaboration', 'CI/CD'],
  ielts: ['Writing', 'Speaking', 'Listening', 'Reading'],
  spanish: ['Gramática', 'Vocabulario', 'Percakapan', 'Latihan'],
  deutsch: ['Grammatik', 'Wortschatz', 'Konversation', 'Latihan']
};

export const articles = {
  cyber: [
    { tag: 'Jaringan', title: 'Memahami Model OSI Tanpa Pusing', excerpt: 'Tujuh layer OSI sering dihafal tanpa dipahami. Ini cara aku akhirnya paham lewat contoh paket yang benar-benar lewat kabel.', date: '2 Sep 2026', readTime: '6 menit baca', href: 'artikel.dc.html' },
    { tag: 'Malware', title: 'Membedah Malware Sederhana di Sandbox', excerpt: 'Belajar analisis statis dan dinamis pakai sampel aman dari repo edukasi, biar nggak modal nekat di laptop pribadi.', date: '28 Agu 2026', readTime: '9 menit baca', href: 'artikel.dc.html' },
    { tag: 'Threat Intel', title: 'Baca Laporan Threat Intel Tanpa Tersesat Istilah', excerpt: 'IOC, TTP, MITRE ATT&CK — istilah yang bikin laporan CTI terasa asing di awal. Ini cara aku memetakannya.', date: '20 Agu 2026', readTime: '5 menit baca', href: 'artikel.dc.html' },
    { tag: 'Defense', title: 'Hardening Server Linux Pemula: 8 Langkah Awal', excerpt: 'Checklist kecil yang aku pakai tiap kali baru setup VPS, sebelum ditinggal online 24 jam.', date: '10 Agu 2026', readTime: '7 menit baca', href: 'artikel.dc.html' }
  ],
  webdev: [
    { tag: 'Frontend', title: 'State Management: Kapan Butuh, Kapan Nggak', excerpt: 'Sebelum pasang Redux, coba dulu useState dan context. Catatan dari proyek kecil yang kepanasan.', date: '5 Sep 2026', readTime: '6 menit baca', href: 'article-webdev.dc.html' },
    { tag: 'Backend', title: 'Bikin REST API Pertama dengan Express', excerpt: 'Dari routing sampai error handling — struktur folder yang aku pakai biar nggak berantakan.', date: '30 Agu 2026', readTime: '8 menit baca', href: 'article-webdev.dc.html' },
    { tag: 'API', title: 'Autentikasi JWT: Konsep dan Jebakannya', excerpt: 'Token expired, refresh token, storage di client — bagian yang paling sering salah dipahami pemula.', date: '22 Agu 2026', readTime: '7 menit baca', href: 'article-webdev.dc.html' },
    { tag: 'Database', title: 'Normalisasi Database Tanpa Overengineering', excerpt: 'Normalisasi penting, tapi bukan berarti semua tabel harus dipecah sampai 5NF. Ini batas yang aku pakai.', date: '14 Agu 2026', readTime: '6 menit baca', href: 'article-webdev.dc.html' }
  ],
  webdesign: [
    { tag: 'UI', title: 'Sistem Warna untuk Yang Bukan Desainer', excerpt: 'Cara aku pilih 1 warna dasar dan bikin skala tona tanpa harus punya insting desain grafis.', date: '4 Sep 2026', readTime: '5 menit baca', href: 'article-webdesign.dc.html' },
    { tag: 'UX', title: 'Wireframe Dulu, Baru Ngoding: Kenapa Ini Penting', excerpt: 'Loncat langsung ke kode itu godaan besar. Ini yang berubah sejak aku mulai sketsa dulu.', date: '27 Agu 2026', readTime: '5 menit baca', href: 'article-webdesign.dc.html' },
    { tag: 'Layout', title: 'Grid System: Dari CSS Grid ke Layout Nyata', excerpt: 'Belajar grid-template-columns lewat kasus nyata — bukan cuma kotak-kotak contoh di tutorial.', date: '19 Agu 2026', readTime: '6 menit baca', href: 'article-webdesign.dc.html' },
    { tag: 'Tipografi', title: 'Memilih Pasangan Font yang Aman', excerpt: 'Dua font, satu untuk judul satu untuk isi. Ini cara aku menghindari kombinasi yang norak.', date: '8 Agu 2026', readTime: '4 menit baca', href: 'article-webdesign.dc.html' }
  ],
  kali: [
    { tag: 'Instalasi', title: 'Instal Kali Linux di VirtualBox dari Nol', excerpt: 'Langkah lengkap bikin VM Kali buat latihan, termasuk alokasi resource yang aku pakai di laptop biasa.', date: '3 Sep 2026', readTime: '7 menit baca', href: 'article-kali.dc.html' },
    { tag: 'Konfigurasi', title: 'Setup Awal Kali: Update, User Baru, SSH', excerpt: 'Hal pertama yang aku lakukan tiap fresh install biar Kali siap dipakai dengan aman.', date: '25 Agu 2026', readTime: '5 menit baca', href: 'article-kali.dc.html' },
    { tag: 'Tools', title: 'Kenalan dengan Terminal Kali dan Kategorinya', excerpt: 'Menu tools di Kali dikelompokkan per fase pentest. Ini cara aku menghafal letaknya.', date: '17 Agu 2026', readTime: '6 menit baca', href: 'article-kali.dc.html' },
    { tag: 'Tips', title: 'Snapshot VM: Kebiasaan yang Menyelamatkan Latihanku', excerpt: 'Sekali rusak konfigurasi, snapshot yang nyelametin waktu berjam-jam setup ulang.', date: '6 Agu 2026', readTime: '4 menit baca', href: 'article-kali.dc.html' }
  ],
  pentest: [
    { tag: 'Recon', title: 'Passive Recon: Cari Info Tanpa Menyentuh Target', excerpt: 'OSINT dasar sebelum scanning aktif — whois, subdomain, dan pencarian yang legal dan etis.', date: '6 Sep 2026', readTime: '7 menit baca', href: 'article-pentest.dc.html' },
    { tag: 'Eksploitasi', title: 'Lab Pertama: Exploit Mesin Rentan di TryHackMe', excerpt: 'Catatan langkah demi langkah menyelesaikan room pemula, dari scanning sampai dapat flag.', date: '29 Agu 2026', readTime: '10 menit baca', href: 'article-pentest.dc.html' },
    { tag: 'Web App', title: 'SQL Injection: Dari Konsep ke Lab Aman', excerpt: 'Kenapa query yang tidak di-sanitize bisa dibajak, dipraktikkan di DVWA bukan di situs orang.', date: '21 Agu 2026', readTime: '8 menit baca', href: 'article-pentest.dc.html' },
    { tag: 'Report', title: 'Nulis Laporan Pentest yang Dibaca Orang Non-Teknis', excerpt: 'Struktur laporan yang aku pakai: ringkasan eksekutif, temuan, risiko, rekomendasi.', date: '12 Agu 2026', readTime: '6 menit baca', href: 'article-pentest.dc.html' }
  ],
  github: [
    { tag: 'Git Dasar', title: 'Git Init Sampai Push: Alur yang Sering Dilupakan', excerpt: 'add, commit, push — kelihatan simpel sampai ketemu conflict pertama. Ini alur yang aku pegang.', date: '7 Sep 2026', readTime: '5 menit baca', href: 'article-github.dc.html' },
    { tag: 'Branching', title: 'Kapan Harus Bikin Branch Baru', excerpt: 'Feature branch, fix branch, main yang selalu bersih — kebiasaan yang aku bangun pelan-pelan.', date: '31 Agu 2026', readTime: '5 menit baca', href: 'article-github.dc.html' },
    { tag: 'Collaboration', title: 'Pull Request Pertamaku: Apa yang Aku Pelajari', excerpt: 'Dari nulis deskripsi PR sampai menerima review — pengalaman kontribusi ke proyek open source kecil.', date: '23 Agu 2026', readTime: '6 menit baca', href: 'article-github.dc.html' },
    { tag: 'CI/CD', title: 'GitHub Actions untuk Proyek Kecil', excerpt: 'Bikin workflow sederhana yang jalanin test otomatis tiap push, tanpa setup yang berlebihan.', date: '15 Agu 2026', readTime: '7 menit baca', href: 'article-github.dc.html' }
  ],
  ielts: [
    { tag: 'Writing', title: 'Struktur Task 2: Cara Aku Susun Argumen', excerpt: 'Template yang aku pakai biar essay nggak keluar topik dan waktu 40 menit cukup.', date: '5 Sep 2026', readTime: '6 menit baca', href: 'article-ielts.dc.html' },
    { tag: 'Speaking', title: 'Part 2 Cue Card: Latihan Bicara 2 Menit Tanpa Blank', excerpt: 'Cara bikin catatan singkat 1 menit yang cukup buat ngobrol lancar 2 menit penuh.', date: '27 Agu 2026', readTime: '5 menit baca', href: 'article-ielts.dc.html' },
    { tag: 'Listening', title: 'Section 4 Listening: Kenapa Ini yang Paling Susah', excerpt: 'Monolog akademik panjang tanpa jeda. Ini strategi predicting yang mulai membantu aku.', date: '18 Agu 2026', readTime: '5 menit baca', href: 'article-ielts.dc.html' },
    { tag: 'Reading', title: 'True/False/Not Given: Jebakan yang Sering Aku Salah', excerpt: 'Bedanya False dan Not Given baru kerasa jelas setelah aku catat pola soalnya sendiri.', date: '9 Agu 2026', readTime: '6 menit baca', href: 'article-ielts.dc.html' }
  ],
  spanish: [
    { tag: 'Gramática', title: 'Ser vs Estar: Akhirnya Nggak Ketuker', excerpt: 'Dua kata kerja "menjadi" yang bikin bingung pemula. Ini cara aku akhirnya bisa membedakan.', date: '4 Sep 2026', readTime: '5 menit baca', href: 'article-spanish.dc.html' },
    { tag: 'Vocabulario', title: '50 Kata Spanish yang Aku Pakai Tiap Hari', excerpt: 'Kosakata dasar untuk percakapan sehari-hari yang aku drilling lewat flashcard.', date: '26 Agu 2026', readTime: '4 menit baca', href: 'article-spanish.dc.html' },
    { tag: 'Percakapan', title: 'Latihan Percakapan Restoran dalam Bahasa Spanyol', excerpt: 'Skrip pendek buat pesan makanan yang aku hafalkan sebelum coba speaking beneran.', date: '16 Agu 2026', readTime: '4 menit baca', href: 'article-spanish.dc.html' },
    { tag: 'Latihan', title: 'Rutinitas 15 Menit Sehari Belajar Spanish', excerpt: 'Jadwal singkat yang realistis aku jalani di tengah kesibukan, bukan target muluk.', date: '7 Agu 2026', readTime: '3 menit baca', href: 'article-spanish.dc.html' }
  ],
  deutsch: [
    { tag: 'Grammatik', title: 'Der, Die, Das: Cara Aku Mulai Menghafal Artikel', excerpt: 'Tiga artikel gender yang bikin frustrasi di awal. Ini pola yang mulai membantu aku.', date: '3 Sep 2026', readTime: '6 menit baca', href: 'article-deutsch.dc.html' },
    { tag: 'Wortschatz', title: 'Kata Benda Majemuk Deutsch yang Bikin Pusing (dan Lucu)', excerpt: 'Kata-kata panjang yang ternyata cuma gabungan kata sederhana kalau dipecah.', date: '24 Agu 2026', readTime: '4 menit baca', href: 'article-deutsch.dc.html' },
    { tag: 'Konversation', title: 'Frasa Dasar untuk Bertahan di Percakapan Pertama', excerpt: 'Kalimat pendek yang aku pakai waktu latihan tandem sama native speaker.', date: '13 Agu 2026', readTime: '4 menit baca', href: 'article-deutsch.dc.html' },
    { tag: 'Latihan', title: 'Kenapa Aku Nonton Ulang Video yang Sama 3 Kali', excerpt: 'Teknik shadowing sederhana buat melatih telinga tanpa harus paham semua kata.', date: '2 Agu 2026', readTime: '3 menit baca', href: 'article-deutsch.dc.html' }
  ]
};

export const latest = [
  articles.github[0], articles.cyber[0], articles.webdev[0], articles.pentest[0], articles.ielts[0], articles.webdesign[0]
];

export const tools = [
  {
    name: 'Nmap', category: 'Recon', use: 'Pemetaan jaringan dan port scanning', level: 'Pemula',
    definition: 'Network Mapper — tool open-source untuk menemukan host yang aktif di jaringan, port mana yang terbuka, dan service/versi apa yang berjalan di masing-masing port.',
    command: 'nmap -sV 192.168.1.1',
    output: 'Starting Nmap 7.94 ( https://nmap.org )\nNmap scan report for 192.168.1.1\nHost is up (0.0021s latency).\nPORT     STATE SERVICE  VERSION\n22/tcp   open  ssh      OpenSSH 8.9\n80/tcp   open  http     Apache 2.4.52\n443/tcp  open  https    Apache 2.4.52\nNmap done: 1 IP address (1 host up) scanned in 4.21 seconds'
  },
  {
    name: 'Wireshark', category: 'Analisis', use: 'Menangkap dan membaca traffic jaringan', level: 'Pemula',
    definition: 'Network protocol analyzer — menangkap paket data yang lewat di jaringan dan menampilkan isinya secara detail. Punya versi command-line bernama tshark untuk dipakai tanpa GUI.',
    command: 'tshark -i eth0 -c 5',
    output: '1 0.000000 192.168.1.5 \u2192 142.250.4.1 TCP 74 SYN\n2 0.021342 142.250.4.1 \u2192 192.168.1.5 TCP 74 SYN, ACK\n3 0.021501 192.168.1.5 \u2192 142.250.4.1 TCP 66 ACK\n4 0.045230 192.168.1.5 \u2192 142.250.4.1 TLSv1.3 583 Client Hello\n5 0.089120 142.250.4.1 \u2192 192.168.1.5 TLSv1.3 1466 Server Hello'
  },
  {
    name: 'Metasploit', category: 'Eksploitasi', use: 'Framework eksploitasi dan payload', level: 'Menengah',
    definition: 'Framework eksploitasi paling populer di dunia pentest — punya database besar exploit siap pakai, payload, dan modul post-exploitation, semua dikendalikan lewat console interaktif msfconsole.',
    command: 'msfconsole\nuse exploit/unix/ftp/vsftpd_234_backdoor\nset RHOSTS 192.168.1.20\nrun',
    output: '[*] 192.168.1.20:21 - Banner: 220 (vsFTPd 2.3.4)\n[*] 192.168.1.20:21 - USER: 331 Please specify the password.\n[+] 192.168.1.20:21 - Backdoor service has been spawned, handling...\n[*] Command shell session 1 opened (192.168.1.10:4444 -> 192.168.1.20:6200)'
  },
  {
    name: 'Burp Suite', category: 'Web App', use: 'Proxy untuk uji keamanan aplikasi web', level: 'Menengah',
    definition: 'Proxy yang mencegat (intercept) traffic HTTP/HTTPS antara browser dan server aplikasi web, sehingga request/response bisa dianalisis atau bahkan dimodifikasi sebelum sampai tujuan.',
    command: 'java -jar burpsuite_community.jar',
    output: 'GET /api/user?id=1 HTTP/1.1\nHost: target.local\nCookie: session=abc123\n--- Response ---\nHTTP/1.1 200 OK\nContent-Type: application/json\n{"id":1,"name":"admin","role":"superuser"}'
  },
  {
    name: 'sqlmap', category: 'Web App', use: 'Otomasi deteksi dan eksploitasi SQL injection', level: 'Menengah',
    definition: 'Tool otomasi yang mendeteksi parameter URL/form yang rentan SQL injection, lalu bisa mengekstrak isi database lewat celah itu tanpa perlu menulis query injection secara manual.',
    command: 'sqlmap -u "http://target.local/item.php?id=1" --dbs',
    output: "[INFO] testing connection to the target URL\n[INFO] GET parameter 'id' appears to be injectable\n[INFO] the back-end DBMS is MySQL\navailable databases [3]:\n[*] information_schema\n[*] shop_db\n[*] mysql"
  },
  {
    name: 'John the Ripper', category: 'Password', use: 'Cracking hash password secara offline', level: 'Menengah',
    definition: 'Tool cracking password offline yang mendukung banyak format hash (MD5, SHA, bcrypt, dan lainnya), mencoba menemukan password asli lewat dictionary attack atau brute force.',
    command: 'john --wordlist=rockyou.txt hashes.txt',
    output: "Loaded 1 password hash (md5crypt)\nPress 'q' or Ctrl-C to abort\npassword123     (user1)\n1g 0:00:00:02 DONE (2026-09-12 10:14) 0.4329g/s"
  },
  {
    name: 'Hydra', category: 'Password', use: 'Brute force login service online', level: 'Menengah',
    definition: 'Tool brute force login untuk berbagai service (SSH, FTP, form login web, dan lainnya) — mencoba banyak kombinasi username/password dari wordlist sampai salah satu berhasil.',
    command: 'hydra -l admin -P wordlist.txt ssh://192.168.1.20',
    output: '[DATA] max 16 tasks per 1 server, overall 16 tasks\n[ATTEMPT] target 192.168.1.20 - login "admin" - pass "admin123"\n[22][ssh] host: 192.168.1.20   login: admin   password: admin123\n1 of 1 target successfully completed'
  },
  {
    name: 'Aircrack-ng', category: 'Wireless', use: 'Audit keamanan jaringan Wi-Fi', level: 'Lanjutan',
    definition: 'Suite tool untuk audit keamanan jaringan Wi-Fi — menangkap handshake WPA/WPA2 saat perangkat terhubung ke jaringan, lalu mencoba memecahkan passwordnya lewat wordlist.',
    command: 'aircrack-ng -w wordlist.txt capture.cap',
    output: 'Opening capture.cap\nRead 3421 packets.\nBSSID: AA:BB:CC:11:22:33   ESSID: HomeWifi   Encryption: WPA2\nKEY FOUND! [ homewifi2024 ]\nMaster Key: 8A F3 2C ... (truncated)'
  },
  {
    name: 'Gobuster', category: 'Web App', use: 'Brute-force direktori/file tersembunyi di web server', level: 'Pemula',
    definition: 'Tool brute-force cepat yang mencocokkan wordlist ke URL untuk menemukan direktori, file, atau subdomain yang tidak sengaja terekspos di web server.',
    command: 'gobuster dir -u http://target.local -w /usr/share/wordlists/dirb/common.txt',
    output: '===============================================================\nGobuster v3.6\n===============================================================\n/admin                (Status: 301)\n/backup               (Status: 200)\n/login.php            (Status: 200)\n==============================================================='
  },
  {
    name: 'Nikto', category: 'Web App', use: 'Scan cepat kerentanan umum pada web server', level: 'Pemula',
    definition: 'Scanner otomatis yang memeriksa web server untuk masalah umum: file berbahaya yang tertinggal, software usang, dan konfigurasi default yang belum diganti.',
    command: 'nikto -h http://target.local',
    output: '- Server: Apache/2.4.29\n+ /admin/: Directory indexing found.\n+ Server may leak inodes via ETags\n+ Outdated Apache version detected'
  },
  {
    name: 'Netcat', category: 'Networking', use: 'Listener, banner grabbing, dan koneksi jaringan mentah', level: 'Pemula',
    definition: 'Sering disebut "pisau Swiss" jaringan — bisa membuka listener untuk menerima koneksi, mengirim data mentah antar host, atau sekadar mengecek apakah sebuah port terbuka.',
    command: 'nc -lvnp 4444',
    output: 'listening on [any] 4444 ...\nconnect to [192.168.1.10] from (UNKNOWN) [192.168.1.20] 51522\n$ whoami\nwww-data'
  },
  {
    name: 'Hashcat', category: 'Password', use: 'Cracking hash password memakai GPU', level: 'Menengah',
    definition: 'Tool cracking password berbasis GPU yang jauh lebih cepat dari John the Ripper untuk hash dalam jumlah besar, mendukung ratusan format hash berbeda.',
    command: 'hashcat -m 0 -a 0 hashes.txt rockyou.txt',
    output: '5f4dcc3b5aa765d61d8327deb882cf99:password\nSession..........: hashcat\nStatus...........: Cracked\nRecovered........: 1/1 (100.00%)'
  },
  {
    name: 'Enum4linux', category: 'Recon', use: 'Enumerasi share dan user dari target Windows/Samba', level: 'Menengah',
    definition: 'Tool khusus untuk menggali informasi dari server Windows/Samba: daftar user, share yang bisa diakses, dan kebijakan password yang berlaku.',
    command: 'enum4linux -a 192.168.1.20',
    output: '[+] Got domain/workgroup name: WORKGROUP\n[+] Users on 192.168.1.20:\n index: 0x3e8 RID: 0x3ea acb: 0x00000010 Account: guest\nShare Enumeration:\n Sharename: Users  Type: Disk'
  },
  {
    name: 'Searchsploit', category: 'Eksploitasi', use: 'Mencari exploit dari database Exploit-DB lokal', level: 'Menengah',
    definition: 'Alat command-line untuk mencari exploit yang cocok dari salinan lokal database Exploit-DB, tanpa perlu membuka browser atau koneksi internet.',
    command: 'searchsploit vsftpd 2.3.4',
    output: '--------------------------------------------------- ---------------------------\n Exploit Title                                      |  Path\n--------------------------------------------------- ---------------------------\nvsftpd 2.3.4 - Backdoor Command Execution           | unix/remote/49757.py'
  },
  {
    name: 'Autopsy', category: 'Analisis', use: 'Analisis forensik disk image lewat GUI', level: 'Lanjutan',
    definition: 'Tools forensik digital berbasis GUI untuk memeriksa disk image — menemukan file yang terhapus, riwayat browser, dan metadata tanpa mengubah data aslinya.',
    command: 'autopsy',
    output: 'Autopsy Forensic Browser\nEvidence Locker: /cases/case01\nOpening image: disk.img (raw, 8GB)\nAnalysis started \u2014 1,204 files indexed.'
  }
];

export const materi = {
  cyber: {
    concept: {
      nodes: [
        { label: 'Asset', desc: 'Apa yang dilindungi — data, sistem, akses.' },
        { label: 'Threat', desc: 'Siapa/apa yang bisa mengancam asset itu.' },
        { label: 'Vulnerability', desc: 'Celah yang bisa dimanfaatkan threat.' },
        { label: 'Risk', desc: 'Dampak kalau threat memanfaatkan celah itu.' },
        { label: 'Control', desc: 'Langkah mitigasi untuk menurunkan risiko.' }
      ],
      mindset: 'Selalu tanya berurutan: apa yang aku lindungi, dari siapa, lewat celah apa, dan apa akibatnya kalau itu benar-benar terjadi. Baru setelah itu pikirkan kontrolnya — bukan sebaliknya.'
    },
    steps: [
      { title: 'Dasar jaringan & sistem operasi', desc: 'Paham IP address, port, protokol TCP/UDP, dan cara kerja Linux/Windows dasar sebelum masuk ke keamanan.', detail: 'Ini fondasi yang paling sering dilewatkan orang yang buru-buru mau jadi "hacker". Sebelum ngerti gimana suatu sistem bisa diserang, kamu harus ngerti dulu gimana sistem itu bekerja secara normal. IP address itu alamat rumah tiap perangkat di jaringan, port itu semacam pintu yang dibuka untuk service tertentu (misalnya port 80 untuk web, port 22 untuk SSH), dan protokol TCP/UDP menentukan cara data dikirim — TCP lebih ketat dan memastikan data utuh, UDP lebih cepat tapi tidak menjamin data sampai. Di sisi sistem operasi, kamu perlu nyaman minimal dengan command line Linux karena sebagian besar server dan tools security jalan di atasnya. Nggak perlu jadi expert dulu — cukup paham cara baca konfigurasi jaringan, cara kerja user dan permission, dan istilah dasar biar nanti pelajaran security nggak terasa seperti bahasa asing.' },
      { title: 'Konsep inti keamanan', desc: 'CIA Triad (Confidentiality, Integrity, Availability), threat, vulnerability, risk, dan bedanya satu sama lain.', detail: 'CIA Triad adalah kerangka paling dasar yang dipakai hampir di semua diskusi security, jadi penting dipahami betul-betul, bukan cuma dihafal. Confidentiality berarti data hanya bisa diakses oleh yang berhak — bocornya data pelanggan adalah pelanggaran confidentiality. Integrity berarti data tidak berubah tanpa izin — kalau ada yang mengubah nominal transaksi tanpa sepengetahuan sistem, itu pelanggaran integrity. Availability berarti sistem harus bisa diakses saat dibutuhkan — serangan DDoS yang membuat situs down adalah pelanggaran availability. Threat adalah pihak atau kejadian yang punya potensi merugikan, vulnerability adalah celah yang membuat threat itu bisa berhasil, dan risk adalah gabungan dari seberapa besar kemungkinan threat memanfaatkan vulnerability dikali seberapa besar dampaknya. Begitu tiga konsep ini nempel, kamu akan mulai lihat setiap kasus keamanan sebagai kombinasi dari ketiganya, bukan sekadar diserang hacker.' },
      { title: 'Kriptografi dasar', desc: 'Enkripsi simetris vs asimetris, hashing, dan kenapa HTTPS penting.', detail: 'Enkripsi simetris pakai satu kunci yang sama untuk mengenkripsi dan mendekripsi data — cepat, tapi masalahnya adalah gimana cara mengirim kunci itu dengan aman ke pihak lain. Enkripsi asimetris memecahkan masalah itu dengan pasangan kunci publik dan privat: kunci publik boleh disebar ke siapa saja untuk mengenkripsi data, tapi hanya kunci privat yang bisa mendekripsinya. Hashing itu berbeda lagi — ini proses satu arah yang mengubah data jadi "sidik jari" unik berukuran tetap, dipakai untuk memverifikasi integritas data atau menyimpan password tanpa menyimpan teks aslinya. HTTPS yang kamu lihat di browser setiap hari sebenarnya kombinasi dari semua ini: asimetris dipakai di awal koneksi untuk saling kenal secara aman, lalu beralih ke simetris yang lebih cepat untuk mengenkripsi data selama sesi berlangsung. Paham alur ini bikin kamu ngerti kenapa sertifikat SSL yang expired bisa jadi masalah serius.' },
      { title: 'Keamanan jaringan', desc: 'Firewall, VPN, IDS/IPS, dan segmentasi jaringan untuk membatasi serangan.', detail: 'Firewall bekerja seperti satpam di pintu masuk jaringan — dia memutuskan trafik mana yang boleh lewat berdasarkan aturan yang sudah ditetapkan, misalnya hanya mengizinkan trafik ke port 80 dan 443. VPN membuat terowongan terenkripsi antara perangkatmu dan jaringan tujuan, jadi meskipun kamu terhubung lewat WiFi publik yang tidak aman, data yang lewat tetap terlindungi dari orang yang menyadap di jaringan itu. IDS (Intrusion Detection System) bertugas mengamati trafik dan memberi peringatan kalau ada aktivitas mencurigakan, sementara IPS (Intrusion Prevention System) melangkah lebih jauh dengan langsung memblokirnya secara otomatis. Segmentasi jaringan berarti membagi jaringan besar jadi beberapa zona kecil yang terpisah, sehingga kalau satu bagian berhasil dibobol, penyerang tidak otomatis punya akses ke seluruh sistem. Menggabungkan keempatnya adalah bagaimana organisasi membangun pertahanan berlapis, bukan mengandalkan satu alat saja.' },
      { title: 'Analisis ancaman', desc: 'Baca log, kenali pola malware sederhana, dan pahami dasar threat intelligence.', detail: 'Log itu jejak digital dari setiap yang terjadi di sistem — siapa login, kapan, dari mana, apa yang diakses. Kemampuan membaca log dengan cepat adalah skill yang membedakan analyst pemula dan yang sudah terbiasa, karena insiden security seringkali baru ketahuan dari pola yang aneh di log, misalnya percobaan login berkali-kali dalam waktu singkat dari IP yang tidak dikenal. Mengenali pola malware sederhana berarti belajar ciri-ciri umum seperti proses mencurigakan, koneksi keluar ke server tidak dikenal, atau perubahan file sistem yang tidak wajar — bukan berarti kamu harus bisa reverse-engineer malware kompleks dari awal. Threat intelligence adalah informasi terstruktur tentang siapa penyerang yang mungkin menyasar organisasi sejenis dan teknik apa yang biasa mereka pakai, sering dipetakan lewat framework MITRE ATT&CK. Menggabungkan kemampuan baca log dengan sedikit context threat intelligence bikin analisis ancaman jauh lebih terarah, bukan sekadar menunggu alarm berbunyi.' },
      { title: 'Praktik & sertifikasi', desc: 'Lab CTF pemula, lalu pertimbangkan sertifikasi seperti CompTIA Security+.', detail: 'Semua teori di atas baru benar-benar nempel kalau dipraktikkan. CTF (Capture The Flag) pemula adalah cara paling seru untuk latihan — ini semacam kompetisi teka-teki yang tiap soalnya mengharuskan kamu memecahkan tantangan security tertentu untuk menemukan sebuah "flag" rahasia. Platform seperti TryHackMe atau picoCTF punya jalur khusus untuk pemula yang membimbing step-by-step, jadi nggak langsung dilempar ke soal susah. Setelah cukup nyaman dengan praktik, sertifikasi seperti CompTIA Security+ bisa jadi tujuan berikutnya karena mengonfirmasi pemahamanmu terhadap konsep-konsep dasar secara terstruktur dan diakui industri. Tapi ingat, sertifikasi itu bukti kelulusan ujian, bukan pengganti jam terbang — kombinasi keduanya yang bikin kamu benar-benar siap kerja di bidang ini.' },
      { title: 'Manajemen risiko & compliance', desc: 'Framework seperti ISO 27001 dan NIST untuk menilai dan mengelola risiko keamanan secara terstruktur.', detail: 'Risk management dimulai dari mengidentifikasi aset apa yang perlu dilindungi, ancaman apa yang mungkin menyasarnya, dan seberapa besar dampaknya kalau terjadi. Framework seperti ISO 27001 memberi struktur standar untuk proses ini, sementara compliance memastikan organisasi memenuhi regulasi yang berlaku (misalnya GDPR untuk data pribadi). Skill ini penting karena banyak keputusan security di dunia kerja nyata ditentukan oleh trade-off risiko dan biaya, bukan cuma mana yang paling aman.' },
      { title: 'Social engineering & phishing awareness', desc: 'Teknik manipulasi psikologis untuk membuat orang membocorkan informasi sensitif, dan cara mengenalinya.', detail: 'Social engineering memanfaatkan kepercayaan, rasa urgensi, atau ketidaktahuan manusia — bukan celah teknis pada sistem. Phishing adalah bentuk paling umum: email atau pesan yang menyamar sah untuk memancing korban mengklik link berbahaya atau memasukkan kredensial. Mengenali ciri-ciri seperti alamat pengirim yang mencurigakan, urgensi berlebihan, dan link yang tidak sesuai domain adalah pertahanan pertama yang paling murah tapi paling efektif.' },
      { title: 'Incident response dasar', desc: 'Langkah menangani insiden keamanan begitu terdeteksi: identifikasi, containment, eradication, recovery.', detail: 'Incident response adalah proses terstruktur begitu sebuah insiden keamanan terdeteksi — bukan sekadar panik dan mematikan semua server. Tahapannya biasanya: identifikasi (apa yang terjadi), containment (mencegah meluas), eradication (menghilangkan penyebab), lalu recovery (mengembalikan sistem normal). Punya rencana ini sebelum insiden terjadi jauh lebih efektif dibanding menyusunnya di tengah krisis.' },
      { title: 'Malware analysis dasar', desc: 'Mengenali ciri-ciri malware dan melakukan analisis statis/dinamis dasar di sandbox aman.', detail: 'Analisis statis memeriksa file malware tanpa menjalankannya — melihat string, struktur file, atau signature yang dikenali. Analisis dinamis menjalankan malware di sandbox terisolasi untuk mengamati perilakunya secara langsung: file apa yang diubah, koneksi apa yang dibuat. Keduanya saling melengkapi, dan yang penting selalu dilakukan di lingkungan terisolasi, tidak pernah di mesin produksi.' },
      { title: 'Cloud security dasar', desc: 'Model shared responsibility, konfigurasi IAM, dan kesalahan konfigurasi umum di AWS/Azure/GCP.', detail: 'Shared responsibility model membagi tugas keamanan: penyedia cloud menjaga keamanan infrastrukturnya, tapi konfigurasi di dalamnya (siapa boleh akses apa, bucket storage terbuka publik atau tidak) tetap tanggung jawab penggunanya. Kesalahan konfigurasi seperti S3 bucket yang tidak sengaja publik adalah salah satu sumber kebocoran data paling umum. Memahami batas tanggung jawab ini krusial karena aman karena di cloud adalah asumsi yang salah.' },
      { title: 'Identity & Access Management (IAM)', desc: 'Mengatur siapa yang boleh mengakses apa, termasuk MFA, least privilege, dan single sign-on.', detail: 'IAM mengatur identitas digital dan hak akses — memastikan setiap orang hanya punya akses yang benar-benar mereka butuhkan (prinsip least privilege), bukan akses penuh biar gampang. Multi-factor authentication (MFA) menambah lapisan verifikasi di luar password, sementara single sign-on memudahkan pengguna login satu kali untuk banyak layanan tanpa mengorbankan keamanan. IAM yang berantakan sering jadi celah masuk paling mudah bagi penyerang.' },
      { title: 'Endpoint security', desc: 'Melindungi perangkat individual (laptop, server) lewat antivirus modern (EDR) dan patching rutin.', detail: 'Endpoint adalah setiap perangkat yang terhubung ke jaringan — laptop, server, bahkan printer pintar. EDR (Endpoint Detection and Response) adalah evolusi antivirus tradisional yang tidak hanya mendeteksi malware yang sudah dikenal, tapi juga memantau perilaku mencurigakan secara real-time. Patching rutin menutup celah yang sudah diketahui publik sebelum sempat dieksploitasi — kebiasaan sederhana yang sering diabaikan justru paling efektif.' },
      { title: 'SIEM & monitoring', desc: 'Mengumpulkan dan menganalisis log dari berbagai sumber secara terpusat untuk deteksi ancaman real-time.', detail: 'SIEM (Security Information and Event Management) mengumpulkan log dari firewall, server, dan aplikasi ke satu tempat terpusat, lalu mengorelasikannya untuk menemukan pola yang mencurigakan yang tidak terlihat kalau log itu terpisah-pisah. Ini yang memungkinkan tim SOC mendeteksi insiden dalam hitungan menit, bukan hari. Skill membaca dashboard SIEM dan menyusun alert yang relevan adalah kemampuan inti seorang security analyst.' },
      { title: 'Karier & sertifikasi lanjutan', desc: 'Jalur setelah Security+: SOC analyst, CEH, OSCP, atau spesialisasi cloud security/GRC.', detail: 'Setelah fondasi Security+ mantap, jalur karier mulai bercabang: SOC analyst untuk yang suka monitoring dan respons insiden, penetration tester lewat sertifikasi seperti OSCP untuk yang suka sisi offensive, atau GRC (Governance, Risk, Compliance) untuk yang lebih tertarik ke kebijakan dan manajemen risiko. Tidak perlu menguasai semuanya sekaligus — pilih satu arah yang paling menarik, lalu perdalam dari sana.' }
    ],
    terms: [
      { term: 'CIA Triad', desc: 'Tiga pilar keamanan: Confidentiality (kerahasiaan), Integrity (keutuhan data), Availability (ketersediaan sistem). Contoh: enkripsi menjaga confidentiality, checksum menjaga integrity, backup server menjaga availability.' },
      { term: 'Firewall', desc: 'Sistem yang menyaring trafik masuk/keluar jaringan berdasarkan aturan tertentu. Contoh: memblokir semua trafik masuk kecuali ke port 80 dan 443 pada web server.' },
      { term: 'VPN', desc: 'Virtual Private Network — membuat koneksi terenkripsi antar perangkat lewat internet publik. Contoh: karyawan remote memakai VPN kantor agar aman mengakses server internal dari WiFi kafe.' },
      { term: 'Malware', desc: 'Perangkat lunak berbahaya: virus, worm, trojan, ransomware, dan sejenisnya. Contoh: trojan yang menyamar sebagai installer software gratis tapi diam-diam mencuri data.' },
      { term: 'Phishing', desc: 'Teknik penipuan untuk mencuri data lewat pesan atau situs yang menyamar sah. Contoh: email palsu dari bank yang meminta klik link untuk verifikasi akun.' },
      { term: 'Enkripsi', desc: 'Mengubah data jadi bentuk tidak terbaca tanpa kunci yang tepat. Contoh: HTTPS mengenkripsi data yang dikirim antara browser dan server web.' },
      { term: 'Vulnerability', desc: 'Celah atau kelemahan pada sistem yang bisa dieksploitasi. Contoh: software yang belum di-update dan punya bug keamanan yang sudah dipublikasikan.' },
      { term: 'Zero-day', desc: 'Celah keamanan yang belum diketahui vendor sehingga belum ada patch-nya. Contoh: exploit yang dijual di dark web sebelum vendor software sempat merilis perbaikan.' },
      { term: 'IDS/IPS', desc: 'Intrusion Detection/Prevention System — mendeteksi dan/atau memblokir aktivitas mencurigakan di jaringan. Contoh: IPS otomatis memblokir IP yang melakukan ribuan percobaan login dalam semenit.' },
      { term: 'SOC', desc: 'Security Operations Center — tim yang memonitor dan merespons insiden keamanan 24/7. Contoh: analyst SOC melihat alert SIEM tengah malam dan langsung mengisolasi server yang terinfeksi.' },
      { term: 'Ransomware', desc: 'Malware yang mengenkripsi data korban dan meminta tebusan untuk kunci dekripsinya. Contoh: perusahaan yang seluruh filenya terkunci dan diminta bayar Bitcoin untuk membukanya.' },
      { term: 'DDoS', desc: 'Distributed Denial of Service — membanjiri server dengan traffic dari banyak sumber sampai layanan down. Contoh: situs e-commerce tidak bisa diakses karena dibanjiri jutaan request palsu sekaligus.' },
      { term: 'Botnet', desc: 'Jaringan perangkat yang terinfeksi malware dan dikendalikan dari jarak jauh tanpa sepengetahuan pemiliknya. Contoh: ribuan kamera CCTV yang diretas lalu dipakai bersama untuk melancarkan serangan DDoS.' },
      { term: 'Patch Management', desc: 'Proses rutin menerapkan update keamanan pada software dan sistem operasi. Contoh: perusahaan menjadwalkan update Windows dan aplikasi setiap bulan untuk menutup celah yang baru ditemukan.' },
      { term: 'MFA (2FA)', desc: 'Multi/Two-Factor Authentication — verifikasi login tambahan di luar password, misalnya kode OTP. Contoh: setelah masukkan password, sistem minta kode 6 digit dari aplikasi Google Authenticator.' }
    ],
    commands: [
      { cmd: 'ping <host>', desc: 'Uji konektivitas dasar ke host lain.' },
      { cmd: 'ip a', desc: 'Melihat konfigurasi IP dan interface jaringan (pengganti ifconfig).' },
      { cmd: 'ss -tulnp', desc: 'Melihat port dan koneksi yang sedang terbuka di sistem.' },
      { cmd: 'tcpdump -i eth0', desc: 'Menangkap traffic jaringan langsung dari command line.' },
      { cmd: 'grep -i "failed" /var/log/auth.log', desc: 'Mencari baris log tertentu, misalnya percobaan login gagal.' },
      { cmd: 'whoami / id', desc: 'Memeriksa identitas dan hak akses user yang sedang login.' },
      { cmd: 'chmod 600 <file>', desc: 'Membatasi izin akses file agar hanya pemilik yang bisa baca/tulis.' },
      { cmd: 'systemctl status <service>', desc: 'Memeriksa status layanan yang berjalan di sistem.' },
      { cmd: 'dig <domain>', desc: 'Melihat data DNS suatu domain.' },
      { cmd: 'journalctl -xe', desc: 'Melihat log sistem terbaru untuk investigasi insiden.' }
    ],
    project: {
      title: 'Bangun home lab monitoring jaringan sederhana',
      desc: 'Proyek latihan untuk melihat CIA Triad dan analisis traffic secara langsung, bukan cuma teori.',
      steps: [
        'Install Wireshark di laptop dan tangkap traffic jaringan rumah selama 5 menit.',
        'Filter traffic HTTP vs HTTPS, catat mana yang datanya bisa dibaca polos.',
        'Setup firewall bawaan OS untuk blokir satu port tertentu, lalu uji dengan port scanner.',
        'Tulis catatan singkat: apa yang berubah setelah firewall aktif.'
      ]
    }
  },
  webdev: {
    concept: {
      nodes: [
        { label: 'Request', desc: 'Browser meminta halaman ke server.' },
        { label: 'HTML', desc: 'Struktur konten yang dikirim balik.' },
        { label: 'CSS', desc: 'Aturan tampilan dari struktur itu.' },
        { label: 'JavaScript', desc: 'Interaktivitas di sisi pengguna.' },
        { label: 'API/Server', desc: 'Logika dan data di balik layar.' },
        { label: 'Database', desc: 'Tempat data itu disimpan.' }
      ],
      mindset: 'Pisahkan dulu tiga peran: apa STRUKTUR-nya (HTML), apa TAMPILAN-nya (CSS), apa PERILAKU-nya (JavaScript). Baru sambungkan ke data di backend — jangan campur ketiganya dari awal.'
    },
    steps: [
      { title: 'Struktur HTML', desc: 'Elemen, atribut, dan cara dokumen HTML disusun sebagai pohon (DOM).', detail: 'HTML adalah kerangka dari setiap halaman web — anggap saja seperti kerangka rumah sebelum dicat dan diisi furnitur. Setiap tag seperti <div>, <p>, atau <img> punya peran masing-masing, dan atribut di dalamnya (seperti src pada <img> atau href pada <a>) memberi informasi tambahan tentang tag itu. Yang sering dilewatkan pemula adalah memahami bahwa browser menerjemahkan HTML jadi struktur pohon bernama DOM (Document Object Model) — setiap elemen jadi node yang punya parent, sibling, dan children. Paham struktur pohon ini penting banget karena nanti CSS akan menata node-node itu secara visual, dan JavaScript akan memanipulasinya secara dinamis. Kalau HTML-nya berantakan dari awal, semua yang dibangun di atasnya akan lebih sulit dan rawan bug.' },
      { title: 'Styling dengan CSS', desc: 'Selector, box model, flexbox, dan grid untuk mengatur tata letak.', detail: 'CSS mengatur bagaimana elemen HTML itu terlihat, tapi konsep paling penting untuk dipahami dulu adalah box model — setiap elemen di halaman itu sebenarnya kotak, yang punya content, padding, border, dan margin. Selector adalah cara kamu menunjuk elemen mana yang mau distyling, entah lewat nama tag, class (.nama-class), atau id (#nama-id) — memahami prioritas selector ini yang sering jadi sumber kebingungan pemula. Flexbox itu solusinya kalau kamu mau menyusun elemen sejajar dalam satu baris atau kolom dengan mudah, misalnya navbar atau daftar kartu. Grid lebih powerful lagi untuk layout dua dimensi — baris dan kolom sekaligus, cocok untuk susunan halaman yang lebih kompleks. Menguasai keduanya membuatmu bisa memilih tool yang paling pas untuk tiap kebutuhan layout, bukan memaksakan satu pendekatan untuk semua kasus.' },
      { title: 'Logika dengan JavaScript', desc: 'Variabel, fungsi, kondisi, dan perulangan sebagai dasar interaktivitas.', detail: 'Kalau HTML adalah struktur dan CSS adalah tampilan, JavaScript adalah otak yang bikin halaman bisa berpikir dan merespons. Variabel menyimpan data yang bisa berubah, fungsi mengelompokkan sekumpulan instruksi yang bisa dipanggil ulang, kondisi (if/else) membuat program mengambil keputusan berdasarkan situasi, dan perulangan (for/while) menjalankan instruksi yang sama berulang kali tanpa harus menulis ulang kodenya. Konsep-konsep ini terdengar sederhana tapi jadi fondasi dari hampir semua logika program, sekompleks apapun aplikasinya nanti. Yang penting di tahap ini bukan menghafal syntax, tapi membangun logika berpikir program — coba biasakan memecah masalah sehari-hari jadi langkah-langkah kecil sebelum menuliskannya jadi kode.' },
      { title: 'Memanipulasi DOM', desc: 'Mengubah tampilan halaman secara dinamis lewat JavaScript.', detail: 'Setelah paham struktur DOM dan bisa menulis logika dasar JavaScript, langkah berikutnya adalah menggabungkan keduanya: mengubah halaman secara dinamis tanpa harus reload. Ini yang bikin halaman terasa hidup — tombol yang menambah item ke daftar, form yang menampilkan pesan error langsung tanpa refresh, atau menu yang muncul-hilang saat diklik. Semua itu dilakukan lewat method seperti document.querySelector untuk menunjuk elemen tertentu di DOM, lalu mengubah propertinya atau menambah/menghapus elemen baru. Event listener adalah cara JavaScript mendengarkan interaksi pengguna seperti klik, ketik, atau scroll, lalu menjalankan fungsi tertentu sebagai responsnya. Latihan paling efektif di tahap ini adalah membuat proyek kecil interaktif — begitu kamu bisa membuat to-do list yang bisa nambah dan hapus item, konsep ini biasanya sudah nempel dengan baik.' },
      { title: 'Mengambil data dari API', desc: 'fetch/async-await untuk komunikasi dengan server.', detail: 'Sampai tahap ini, data yang dipakai biasanya masih ditulis manual di kode. Tapi aplikasi nyata butuh data yang berubah-ubah — daftar produk, cuaca terkini, komentar pengguna — dan itu datang dari server lewat API. fetch adalah fungsi bawaan JavaScript untuk meminta data dari alamat API tertentu, dan karena permintaan ke server butuh waktu, JavaScript punya konsep asynchronous — kode tidak berhenti menunggu, tapi melanjutkan proses lain sambil menunggu respons datang. async/await adalah cara menulis kode asynchronous itu supaya terasa lebih mudah dibaca, seperti kode biasa yang berurutan, padahal di baliknya tetap non-blocking. Kesalahan yang sering muncul di tahap ini adalah lupa menangani kondisi ketika API gagal merespons, makanya penting juga belajar menangani error dengan try/catch supaya aplikasi tidak diam saja saat terjadi masalah.' },
      { title: 'Framework & backend', desc: 'Naik ke React di frontend dan Node.js/Express di backend, lalu koneksi ke database.', detail: 'Setelah nyaman dengan HTML, CSS, dan JavaScript murni, kamu akan mulai merasa menulis semuanya dari nol itu repetitif untuk aplikasi yang lebih besar — di sinilah framework seperti React masuk. React memperkenalkan cara berpikir berbasis komponen: kamu memecah UI jadi bagian-bagian kecil yang bisa dipakai ulang, dan mengatur bagaimana data (state) berubah memengaruhi tampilan secara otomatis. Di sisi lain, Node.js memungkinkan JavaScript juga berjalan di server, dan Express adalah framework populer untuk membangun API di atas Node.js. Terakhir, database adalah tempat data itu benar-benar disimpan secara permanen, entah relasional seperti PostgreSQL atau non-relasional seperti MongoDB. Menyambungkan keempatnya adalah momen ketika kamu resmi membangun aplikasi web full-stack, bukan sekadar halaman statis.' },
      { title: 'CSS layout lanjutan: Flexbox & Grid', desc: 'Menggabungkan Flexbox dan Grid untuk layout halaman yang lebih kompleks dari sekadar satu baris.', detail: 'Flexbox unggul untuk menyusun elemen dalam satu arah (baris atau kolom), sementara Grid dirancang untuk layout dua dimensi — baris dan kolom sekaligus, cocok untuk struktur halaman penuh. Praktik yang umum: Grid untuk kerangka besar halaman (header, sidebar, konten, footer), Flexbox untuk menyusun elemen di dalam masing-masing bagian itu. Menguasai kapan memakai yang mana menghindarkanmu dari memaksakan satu tool untuk semua kasus.' },
      { title: 'Responsive design & media queries', desc: 'Membuat halaman menyesuaikan tampilan di berbagai ukuran layar dengan @media.', detail: '@media query menerapkan CSS berbeda tergantung kondisi seperti lebar layar, misalnya menyembunyikan sidebar di layar kecil. Pendekatan mobile-first (mendesain dari layar kecil dulu, baru menambah aturan untuk layar besar) biasanya menghasilkan CSS yang lebih rapi dibanding sebaliknya. Testing di beberapa ukuran layar nyata (bukan cuma resize browser) tetap penting karena perilaku touch dan rendering font bisa berbeda.' },
      { title: 'Version control dengan Git untuk proyek web', desc: 'Memakai Git sejak awal proyek, bukan ditambahkan belakangan setelah kode berantakan.', detail: 'Banyak pemula menunda belajar Git sampai proyeknya "cukup besar", padahal justru proyek kecil adalah tempat paling aman untuk belajar branching dan commit tanpa risiko besar. Kebiasaan commit kecil dan sering sejak awal membuat histori proyek jadi aset yang berguna, bukan cuma formalitas. Detail lebih lanjut soal Git ada di kategori GitHub tersendiri di situs ini.' },
      { title: 'Package manager & build tools', desc: 'npm/yarn untuk mengelola dependency, dan tools seperti Vite untuk development modern.', detail: 'Package manager seperti npm mengelola library pihak ketiga yang dipakai proyek — mencatat versi persisnya di file package.json supaya proyek bisa dijalankan ulang di komputer lain dengan versi yang sama. Build tools seperti Vite mempercepat proses development dengan hot reload instan dan mengoptimalkan kode sebelum di-deploy. Memahami dasar ini penting karena hampir semua proyek modern, sekecil apa pun, memakai kombinasi keduanya.' },
      { title: 'State management di frontend', desc: 'Kapan cukup pakai useState/Context, kapan butuh Redux/Zustand — sudah dibahas detail di artikel kategori ini.', detail: 'Ini adalah pendalaman dari topik yang sudah dibahas di artikel utama kategori Web Development: memilih pendekatan state management yang tepat sesuai skala aplikasi. Aplikasi kecil cukup dengan local state dan Context, sementara aplikasi besar dengan banyak komponen yang saling bergantung baru butuh library khusus. Latihan terbaik adalah membangun ulang proyek kecil yang sama dengan pendekatan berbeda untuk merasakan langsung trade-off-nya.' },
      { title: 'Testing dasar untuk kode frontend', desc: 'Menulis unit test sederhana untuk memastikan fungsi/komponen bekerja sesuai harapan.', detail: 'Unit test memeriksa satu bagian kecil kode (misalnya satu fungsi) secara terisolasi untuk memastikan hasilnya sesuai ekspektasi, dijalankan otomatis setiap ada perubahan. Tools seperti Vitest atau Jest adalah pilihan umum di ekosistem JavaScript modern. Kebiasaan menulis test untuk logika penting (bukan semua kode) membantu menangkap bug lebih awal, sebelum sampai ke pengguna.' },
      { title: 'Deployment dasar', desc: 'Mempublikasikan website ke internet lewat platform seperti Vercel atau Netlify.', detail: 'Deployment adalah proses memindahkan kode dari komputer lokal ke server yang bisa diakses publik. Platform modern seperti Vercel dan Netlify menyederhanakan proses ini drastis — cukup hubungkan repository GitHub, dan setiap push otomatis di-deploy ulang. Memahami dasar ini penting supaya proyek yang dibuat tidak hanya "jalan di laptop sendiri", tapi benar-benar bisa diakses orang lain.' },
      { title: 'Web performance & optimization dasar', desc: 'Mengecil ukuran gambar, lazy loading, dan mengukur performa dengan Lighthouse.', detail: 'Halaman yang lambat membuat pengunjung pergi sebelum kontennya sempat terlihat. Teknik dasar seperti mengompresi gambar, lazy loading (memuat gambar hanya saat terlihat di layar), dan meminimalkan file CSS/JS bisa memberi peningkatan besar dengan usaha yang relatif kecil. Tools seperti Lighthouse di Chrome DevTools memberi skor dan rekomendasi konkret, bukan cuma perasaan "kayaknya lambat".' },
      { title: 'Aksesibilitas web (a11y) dasar', desc: 'Memastikan website bisa dipakai oleh pengguna dengan disabilitas, misalnya lewat screen reader.', detail: 'Aksesibilitas berarti memastikan website bisa dipakai semua orang, termasuk yang memakai screen reader atau tidak bisa memakai mouse. Praktik dasar: memberi atribut alt pada gambar, memastikan elemen interaktif bisa dijangkau lewat keyboard (Tab), dan memakai HTML semantik (button, bukan div yang di-styling seperti tombol). Ini bukan fitur tambahan opsional — di banyak negara, aksesibilitas web bahkan diatur regulasi.' }
    ],
    terms: [
      { term: '<html></html>', desc: 'Elemen pembungkus seluruh dokumen HTML — semua tag lain ada di dalamnya.' },
      { term: '<head></head>', desc: 'Berisi metadata halaman: judul, link CSS, dan info yang tidak tampil langsung di halaman.' },
      { term: '<body></body>', desc: 'Berisi seluruh konten yang benar-benar tampil di browser.' },
      { term: '<div></div>', desc: 'Kontainer generik tanpa makna semantik, dipakai untuk mengelompokkan elemen lain.' },
      { term: '<p></p>', desc: 'Menandai satu paragraf teks.' },
      { term: '<img>', desc: 'Menampilkan gambar; atribut src menentukan sumbernya dan alt teks alternatifnya.' },
      { term: '<a href="">', desc: 'Membuat tautan/link; atribut href menentukan tujuan link tersebut.' },
      { term: 'Selector CSS', desc: 'Cara memilih elemen HTML mana yang mau distyling, misalnya .class atau #id.' },
      { term: 'Flexbox', desc: 'Model layout CSS satu dimensi untuk menyusun elemen sejajar (baris/kolom) dengan mudah.' },
      { term: 'DOM', desc: 'Document Object Model — representasi halaman HTML sebagai struktur objek yang bisa diubah lewat JavaScript.' }
    ],
    project: {
      title: 'Bikin to-do list interaktif',
      desc: 'Proyek kecil yang memakai HTML, CSS, dan JavaScript sekaligus dari nol.',
      steps: [
        'Buat struktur HTML: input teks, tombol tambah, dan <ul> kosong untuk daftar.',
        'Styling dengan CSS: flexbox untuk baris input, spacing yang konsisten.',
        'Tulis JavaScript untuk menambah <li> baru saat tombol diklik.',
        'Tambahkan tombol hapus di setiap item lewat event listener.'
      ]
    }
  },
  webdesign: {
    concept: {
      nodes: [
        { label: 'Riset pengguna', desc: 'Siapa yang pakai, apa kebutuhannya.' },
        { label: 'Wireframe', desc: 'Struktur halaman tanpa visual.' },
        { label: 'Visual', desc: 'Warna, tipografi, gambar.' },
        { label: 'Prototype', desc: 'Versi interaktif untuk diuji.' },
        { label: 'Test', desc: 'Validasi ke pengguna asli.' }
      ],
      mindset: 'Jangan mulai dari warna. Mulai dari siapa penggunanya dan apa yang mereka butuhkan, turun ke struktur, dan visual dikerjakan paling akhir.'
    },
    steps: [
      { title: 'Riset & wireframe', desc: 'Memahami kebutuhan pengguna, lalu sketsa layout kasar tanpa warna/detail.', detail: 'Godaan terbesar pemula adalah langsung membuka Figma dan mulai memilih warna serta font. Padahal desain yang baik dimulai dari pertanyaan yang jauh lebih membosankan: siapa yang akan memakai ini, dan apa yang sebenarnya mereka butuhkan? Riset tidak harus rumit — bisa sesederhana membuat daftar 3-5 tugas utama yang harus bisa diselesaikan pengguna di halaman itu. Setelah itu, wireframe adalah sketsa kasar struktur halaman — kotak-kotak dan garis yang menunjukkan di mana header, konten utama, dan tombol aksi akan ditaruh, tanpa warna atau detail visual apa pun. Tujuannya supaya kamu fokus dulu ke alur dan struktur, bukan terdistraksi tampilan yang belum waktunya dipikirkan. Banyak masalah usability sebenarnya lebih murah diperbaiki di tahap wireframe ini, dibanding ketahuan setelah semuanya sudah jadi visual yang indah.' },
      { title: 'Grid & layout', desc: 'Menyusun elemen dalam grid yang konsisten agar halaman terasa rapi.', detail: 'Grid adalah kerangka tak kasat mata yang membuat sebuah halaman terasa rapi dan terorganisir, meskipun pengguna biasa tidak akan menyadarinya secara sadar — mereka hanya akan merasa ini enak dilihat atau ini berantakan. Konsepnya adalah membagi halaman jadi kolom-kolom (biasanya 12 kolom adalah standar umum), lalu setiap elemen ditempatkan mengikuti kelipatan kolom itu, bukan posisi sembarangan. Ini yang membuat elemen-elemen di halaman terasa sejajar satu sama lain meskipun ukurannya berbeda-beda. Konsistensi jarak antar elemen juga bagian dari sistem ini — kalau satu tempat pakai jarak 16px dan tempat lain 15px, mata akan menangkap ketidakkonsistenan itu meski secara sadar tidak bisa menjelaskan kenapa. Menguasai grid berarti kamu berhenti menempatkan elemen karena kelihatannya pas, dan mulai punya sistem yang bisa dipertanggungjawabkan dan diulang di halaman lain.' },
      { title: 'Tipografi', desc: 'Memilih pasangan font dan skala ukuran untuk hierarki teks.', detail: 'Tipografi bukan cuma soal font apa yang dipakai, tapi bagaimana ukuran, ketebalan, dan jarak antar teks menciptakan hierarki — bagian mana yang harus dibaca duluan, dan mana yang pendukung. Aturan praktis yang aman untuk pemula: gunakan satu font untuk judul dan satu font untuk isi, lalu bangun skala ukuran yang konsisten, misalnya 14px untuk teks kecil, 16px untuk body, 24px untuk subjudul, dan 36px untuk judul utama — bukan angka acak yang berbeda di setiap halaman. Line-height juga sering diremehkan; teks yang terlalu rapat baris-barisnya jadi melelahkan dibaca, idealnya sekitar 1.4-1.6 kali ukuran fontnya. Kesalahan umum lain adalah memakai terlalu banyak font sekaligus yang bikin halaman terasa tidak konsisten dan kurang profesional, meski masing-masing font itu bagus kalau dipakai sendiri-sendiri.' },
      { title: 'Warna & kontras', desc: 'Membangun palet warna dengan kontras yang cukup untuk dibaca.', detail: 'Membangun palet warna yang enak dilihat lebih mudah kalau kamu mulai dari satu warna dasar, lalu membuat variasi terang dan gelapnya secara sistematis — bukan menebak-nebak warna baru setiap butuh. Dari satu warna itu, kamu bisa punya versi sangat terang untuk background halus, versi sedang untuk elemen interaktif, dan versi gelap untuk teks atau elemen yang butuh penekanan. Kontras adalah bagian yang sering diabaikan tapi krusial untuk aksesibilitas — teks abu-abu muda di atas putih mungkin terlihat estetik di mata desainer, tapi bisa jadi hampir tidak terbaca bagi banyak orang. Ada rasio kontras minimum yang jadi standar (4.5:1 untuk teks normal) yang bisa dicek dengan tools online gratis. Intinya: warna itu alat komunikasi, bukan hiasan — yang paling penting adalah teksnya tetap bisa dibaca oleh semua orang, bukan cuma terlihat bagus di screenshot.' },
      { title: 'Prototyping', desc: 'Membuat mockup interaktif di tool seperti Figma sebelum masuk ke kode.', detail: 'Mockup memberi tahu bagaimana tampilan sebuah halaman, tapi tidak memberi tahu bagaimana rasanya memakai halaman itu — dan di situlah prototyping masuk. Dengan tool seperti Figma, kamu bisa menghubungkan beberapa mockup dengan interaksi, sehingga orang yang mencobanya bisa merasakan alur sebenarnya, bukan cuma melihat gambar statis. Ini penting karena banyak masalah UX baru ketahuan saat dicoba secara interaktif — misalnya tombol yang terlihat jelas di mockup tapi ternyata membingungkan urutannya saat benar-benar diklik satu per satu. Prototyping juga jauh lebih murah dan cepat untuk diubah dibanding sudah menulis kode sungguhan, jadi ini kesempatan terakhir untuk memperbaiki alur sebelum masuk ke development. Semakin dekat prototype itu dengan pengalaman nyata, semakin akurat juga feedback yang bisa didapat dari orang yang mencobanya.' },
      { title: 'Usability testing', desc: 'Menguji desain ke orang lain untuk menemukan bagian yang membingungkan.', detail: 'Sehebat apapun kamu merasa desainmu bagus, cara paling jujur untuk tahu apakah itu benar-benar berhasil adalah dengan melihat orang lain memakainya — bukan menjelaskan cara pakainya, cukup amati. Berikan mereka satu tugas konkret tanpa memberi petunjuk, lalu perhatikan di mana mereka ragu, salah klik, atau bertanya ini gimana ya. Titik-titik kebingungan itulah yang jadi petunjuk paling berharga tentang bagian mana dari desainmu yang perlu diperbaiki, dan seringkali itu hal yang tidak akan pernah kamu sadari sendiri karena sudah terlalu familiar dengan desainmu sendiri. Tidak perlu testing ke puluhan orang — bahkan mengetesnya ke 3-5 orang saja biasanya sudah cukup untuk menemukan masalah-masalah besar. Kebiasaan ini yang membedakan desainer yang terus berkembang dengan yang berhenti belajar setelah merasa desainnya sudah bagus.' },
      { title: 'Design system dasar', desc: 'Membangun kumpulan komponen dan aturan desain yang konsisten dipakai berulang.', detail: 'Design system adalah kumpulan komponen (button, card, form) dan aturan (warna, spacing, tipografi) yang didefinisikan sekali dan dipakai konsisten di seluruh produk. Ini menghemat waktu besar untuk proyek yang tumbuh, karena tidak perlu mendesain ulang button dari nol setiap ada halaman baru. Memulai kecil — cukup beberapa komponen inti dulu — lebih realistis dibanding mencoba membangun design system lengkap sejak awal.' },
      { title: 'Micro-interactions & animasi UI', desc: 'Animasi kecil (hover, transisi, loading) yang membuat interface terasa hidup dan responsif.', detail: 'Micro-interaction adalah animasi singkat yang memberi feedback atas satu aksi pengguna — tombol yang sedikit membesar saat hover, atau loading spinner saat data dimuat. Animasi ini seharusnya cepat (150-300ms) dan halus, tidak mengganggu — tujuannya membantu pengguna memahami apa yang terjadi, bukan sekadar terlihat keren. Terlalu banyak animasi justru bisa membuat interface terasa lambat dan mengganggu.' },
      { title: 'Mobile-first design', desc: 'Mendesain dari layar kecil dulu, baru mengembangkan ke layar besar.', detail: 'Mobile-first berarti mulai mendesain untuk layar ponsel dulu — memaksa fokus ke konten dan aksi paling penting karena ruang yang terbatas. Setelah versi mobile solid, desain dikembangkan ke layar lebih besar dengan menambah elemen, bukan mengecilkan desain desktop yang penuh sesak. Pendekatan ini masuk akal karena mayoritas traffic web sekarang justru datang dari perangkat mobile.' },
      { title: 'Ikonografi & imagery', desc: 'Memilih gaya ikon dan foto yang konsisten dan mendukung pesan produk.', detail: 'Ikon dan foto bukan cuma dekorasi — gaya yang konsisten (semua ikon outline atau semua solid, misalnya) membuat interface terasa lebih rapi dan profesional. Memilih satu set ikon dari sumber yang sama (seperti Phosphor atau Feather) lebih aman dibanding mencampur ikon dari berbagai gaya yang berbeda. Untuk foto, konsistensi treatment (warna, crop, filter) sama pentingnya dengan kualitas foto itu sendiri.' },
      { title: 'Dark mode design', desc: 'Merancang versi gelap dari desain yang tetap nyaman dibaca dan konsisten brand-nya.', detail: 'Dark mode bukan sekadar membalik warna hitam-putih — warna yang bagus di latar terang bisa jadi terlalu menyilaukan atau kontrasnya berubah drastis di latar gelap. Praktik yang aman: gunakan abu-abu gelap (bukan hitam pekat) sebagai latar untuk mengurangi kontras berlebihan, dan uji ulang semua kombinasi warna teks-latar di kedua mode. Banyak pengguna sekarang mengharapkan dark mode sebagai fitur standar, bukan bonus.' },
      { title: 'Handoff ke developer', desc: 'Menyiapkan file desain (spesifikasi spacing, warna, komponen) agar mudah diterjemahkan jadi kode.', detail: 'Handoff adalah momen desain berpindah tangan ke developer untuk diimplementasikan — dan kualitas handoff yang baik menentukan seberapa dekat hasil akhir dengan desain aslinya. Menyediakan spesifikasi jelas (ukuran spacing dalam angka, kode warna hex, nama komponen yang konsisten) jauh lebih membantu dibanding developer menebak-nebak dari screenshot. Tools seperti Figma punya fitur inspect yang otomatis menampilkan detail ini ke developer.' },
      { title: 'A/B testing dasar untuk desain', desc: 'Menguji dua versi desain ke pengguna nyata untuk melihat mana yang performanya lebih baik.', detail: 'A/B testing menunjukkan dua versi desain berbeda ke kelompok pengguna berbeda secara acak, lalu membandingkan metrik konkret seperti tingkat klik atau konversi. Ini beda dari usability testing (yang mencari masalah kualitatif) — A/B testing menjawab pertanyaan kuantitatif seperti "warna tombol mana yang menghasilkan lebih banyak klik?". Butuh jumlah pengguna yang cukup besar agar hasilnya valid secara statistik, jadi tidak selalu cocok untuk produk dengan traffic kecil.' },
      { title: 'Accessibility dalam design', desc: 'Memastikan kontras warna, ukuran target tap, dan alt text sudah dipikirkan dari tahap desain.', detail: 'Aksesibilitas seharusnya dipikirkan sejak tahap desain, bukan ditambal belakangan oleh developer. Target tap (tombol, link) minimal 44x44px agar nyaman disentuh di layar mobile, kontras warna minimal 4.5:1 untuk teks normal, dan setiap gambar penting perlu direncanakan alt text-nya sejak di file desain. Desainer yang memikirkan ini dari awal menghemat banyak revisi bolak-balik dengan developer di kemudian hari.' },
      { title: 'Membangun portofolio desain', desc: 'Menyusun studi kasus (case study) dari proyek yang sudah dikerjakan untuk ditunjukkan ke calon klien/employer.', detail: 'Portofolio desain yang efektif bukan cuma kumpulan mockup cantik, tapi cerita proses: apa masalahnya, bagaimana risetnya, apa saja opsi yang dipertimbangkan, dan kenapa solusi akhir dipilih. Studi kasus seperti ini menunjukkan cara berpikir desainer, yang lebih meyakinkan calon klien/employer dibanding hasil akhir semata. Bahkan proyek latihan pribadi (seperti redesain landing page di halaman ini) bisa jadi studi kasus yang baik kalau didokumentasikan dengan benar.' }
    ],
    terms: [
      { term: 'Wireframe', desc: 'Sketsa struktur halaman tanpa warna atau detail visual, fokus ke tata letak.' },
      { term: 'Mockup', desc: 'Rancangan visual yang sudah punya warna, font, dan gambar mendekati hasil akhir.' },
      { term: 'Prototype', desc: 'Versi interaktif dari mockup yang bisa diklik untuk simulasi alur pengguna.' },
      { term: 'UI', desc: 'User Interface — tampilan visual yang dilihat dan disentuh pengguna.' },
      { term: 'UX', desc: 'User Experience — keseluruhan pengalaman pengguna saat memakai produk.' },
      { term: 'Grid system', desc: 'Struktur kolom dan baris yang menjaga elemen tetap sejajar dan konsisten.' },
      { term: 'Whitespace', desc: 'Ruang kosong di sekitar elemen yang membantu keterbacaan dan fokus.' },
      { term: 'Design system', desc: 'Kumpulan aturan, komponen, dan token desain yang dipakai konsisten di seluruh produk.' },
      { term: 'Responsive design', desc: 'Desain yang menyesuaikan tampilan di berbagai ukuran layar.' },
      { term: 'Kontras warna', desc: 'Perbedaan terang-gelap antara teks dan latar agar tetap terbaca.' }
    ],
    project: {
      title: 'Redesain landing page sederhana',
      desc: 'Latihan menerapkan seluruh alur: dari wireframe sampai mockup.',
      steps: [
        'Pilih satu halaman produk yang sudah ada, sketsa ulang wireframe-nya di kertas.',
        'Tentukan satu warna dasar dan buat skala 3-5 warna turunannya.',
        'Pilih 2 font: satu untuk judul, satu untuk isi teks.',
        'Susun ulang jadi mockup digital di Figma atau tool sejenis.'
      ]
    }
  },
  kali: {
    concept: {
      nodes: [
        { label: 'Kenali fase', desc: 'Recon, scan, exploit, atau report?' },
        { label: 'Pilih tool', desc: 'Cocokkan tool dengan fase itu.' },
        { label: 'Pahami cara kerja', desc: 'Baca dulu apa yang tool itu lakukan.' },
        { label: 'Coba di lab', desc: 'Praktik di VM/jaringan sendiri.' },
        { label: 'Baca output', desc: 'Sesuaikan strategi dari hasilnya.' }
      ],
      mindset: 'Kali bukan satu tool sakti. Setiap tool punya fase masing-masing — cocokkan tool dengan pertanyaan yang mau dijawab, bukan pakai semua tool sekaligus.'
    },
    steps: [
      { title: 'Instalasi & virtualisasi', desc: 'Pasang Kali di VirtualBox/VMware agar aman dipakai untuk latihan.', detail: 'Menjalankan Kali langsung di laptop utama sebagai sistem operasi harian bukan ide bagus, terutama untuk pemula — risikonya besar dan susah di-reset kalau ada yang salah konfigurasi. Virtualisasi menyelesaikan masalah ini: kamu menjalankan Kali sebagai komputer di dalam komputer lewat software seperti VirtualBox atau VMware, yang benar-benar terisolasi dari sistem operasi utamamu. Alokasi resource yang wajar untuk pemula adalah sekitar 2 CPU core dan 4GB RAM — cukup untuk menjalankan kebanyakan tools tanpa terasa lambat. Keuntungan besar virtualisasi lainnya adalah kemampuan snapshot — kalau kamu merusak sesuatu saat eksperimen, kamu bisa mengembalikan seluruh VM ke kondisi sebelumnya dalam hitungan detik. Ini bikin proses belajar jauh lebih aman untuk coba-coba tanpa takut merusak apa pun yang penting.' },
      { title: 'Navigasi terminal', desc: 'Perintah dasar Linux: ls, cd, pwd, cat, sampai izin file (chmod).', detail: 'Kalau kamu terbiasa dengan antarmuka klik-klik di Windows/Mac, terminal Linux di awal terasa seperti belajar bahasa baru — tapi ini investasi yang benar-benar worth it karena hampir semua tools security dikendalikan lewat command line. ls menampilkan isi folder, cd berpindah folder, pwd menunjukkan folder yang sedang aktif, dan cat menampilkan isi sebuah file langsung di terminal. Konsep permission juga penting dipahami sejak awal — setiap file punya aturan siapa yang boleh membaca, menulis, atau menjalankannya, dan chmod adalah command untuk mengubah aturan itu. Yang sering membuat pemula frustrasi adalah lupa bahwa Linux itu case-sensitive dan strict soal spasi di dalam command. Cara paling efektif belajar ini bukan menghafal semua command sekaligus, tapi membiasakan diri memakai terminal untuk tugas sehari-hari sampai jari-jarimu hafal tanpa perlu berpikir.' },
      { title: 'Package management', desc: 'Install, update, dan hapus software lewat apt.', detail: 'Di Windows kamu biasa install software lewat installer .exe, tapi di Linux cara yang jauh lebih umum adalah lewat package manager bernama apt. Konsepnya: ada toko aplikasi terpusat (disebut repository) yang isinya ribuan software yang sudah diverifikasi, dan apt adalah alat untuk mengambil, menginstall, memperbarui, atau menghapus software dari toko itu lewat satu baris command. apt update memperbarui daftar software yang tersedia, sementara apt upgrade benar-benar memperbarui software yang sudah terinstall ke versi terbarunya. Kebiasaan yang baik adalah selalu menjalankan apt update sebelum menginstall sesuatu yang baru. Memahami sistem ini penting karena hampir semua tools security tambahan yang akan kamu pakai nanti — dari Nmap sampai Metasploit — diinstall lewat mekanisme yang sama.' },
      { title: 'Konfigurasi jaringan', desc: 'Atur IP, cek koneksi, dan pahami interface jaringan di Kali.', detail: 'Karena Kali biasanya dijalankan sebagai VM, dia butuh terhubung ke jaringan entah untuk browsing biasa atau untuk latihan scanning ke mesin lain di jaringan virtual yang sama. VirtualBox/VMware biasanya punya beberapa mode jaringan — NAT (VM bisa akses internet tapi tidak terlihat dari luar), Bridged (VM seolah jadi perangkat terpisah di jaringan fisikmu), dan Host-only (VM hanya bisa berkomunikasi dengan host dan VM lain) — memilih mode yang tepat penting supaya tidak sengaja mengganggu jaringan orang lain. Command ip a menunjukkan alamat IP yang sedang dipakai VM-mu, dan ip link menunjukkan interface jaringan apa saja yang tersedia. Kalau kamu setup home lab dengan beberapa VM, memastikan keduanya berada di mode jaringan yang sama adalah langkah yang sering terlewat tapi krusial supaya mereka bisa saling melihat.' },
      { title: 'Eksplorasi kategori tools', desc: 'Kenali menu tools Kali yang dikelompokkan per fase pentest.', detail: 'Kali datang dengan ratusan tools yang sudah terinstall, dan ini bisa terasa membanjiri kalau kamu membuka menu Applications untuk pertama kali. Kabar baiknya, tools-tools itu sudah dikelompokkan berdasarkan fase pentest: Information Gathering, Vulnerability Analysis, Web Application Analysis, Password Attacks, Exploitation Tools, Sniffing & Spoofing, dan seterusnya. Alih-alih mencoba menghafal semua tools satu per satu, cara yang lebih efektif adalah memahami dulu di fase mana kamu berada, lalu cari tools yang relevan di kategori itu. Lama-kelamaan, kamu akan mengenali bahwa banyak tools sebenarnya menyelesaikan masalah yang serupa dengan cara berbeda, dan kamu bisa memilih sesuai kebutuhan spesifik. Pendekatan fase dulu, tools belakangan ini juga yang mendasari peta konsep di bagian atas halaman ini.' },
      { title: 'Praktik di lab legal', desc: 'Coba tools di lingkungan sendiri atau platform latihan resmi.', detail: 'Semua pengetahuan tentang tools jadi tidak berarti kalau tidak pernah benar-benar dipraktikkan — tapi mempraktikkannya di sistem yang bukan milikmu, tanpa izin, adalah tindakan ilegal di hampir semua negara, meskipun niatnya cuma coba-coba. Untungnya ada banyak cara legal untuk latihan: platform seperti TryHackMe dan HackTheBox menyediakan mesin virtual yang secara sengaja dibuat rentan, VM seperti Metasploitable atau DVWA bisa didownload dan dijalankan di jaringan sendiri, dan beberapa perusahaan bahkan punya program bug bounty resmi. Latihan di lingkungan legal ini juga yang membuat kamu bisa belajar dari kesalahan tanpa konsekuensi hukum. Anggap linimasa belajarmu seperti ini: baca konsep, coba di lab legal, lihat hasilnya, ulangi dengan variasi — bukan baca konsep lalu langsung mencoba ke target sungguhan.' },
      { title: 'Manajemen user & permission lanjutan', desc: 'Sudo, groups, dan mengatur akses tanpa selalu jadi root.', detail: 'Bekerja sebagai root terus-menerus itu berisiko — satu salah command bisa merusak sistem tanpa penghalang apa pun. sudo memungkinkan user biasa menjalankan command tertentu dengan hak admin secara terkontrol dan tercatat, sementara groups mengatur akses berdasarkan kelompok user. Kebiasaan memakai sudo hanya saat dibutuhkan (bukan login sebagai root selamanya) adalah praktik keamanan dasar yang berlaku di semua distro Linux, bukan cuma Kali.' },
      { title: 'Automasi dengan Bash scripting dasar', desc: 'Menulis script sederhana untuk menjalankan urutan command berulang secara otomatis.', detail: 'Bash script adalah kumpulan command yang ditulis dalam satu file dan dijalankan sekaligus, menghindarkanmu dari mengetik ulang urutan command yang sama setiap hari. Konsep dasarnya mirip bahasa program lain: variabel, kondisi if, dan perulangan loop, tapi khusus untuk menjalankan command shell. Kemampuan ini yang membedakan pengguna Kali yang efisien dari yang masih mengetik semuanya manual satu-satu.' },
      { title: 'Kustomisasi & persistence di live USB', desc: 'Menjalankan Kali dari USB tanpa instalasi, dan menyimpan perubahan agar tidak hilang.', detail: 'Live USB memungkinkan menjalankan Kali di komputer mana pun tanpa menginstallnya ke hard disk — cocok untuk kerja di lapangan atau komputer yang bukan milik sendiri. Tanpa konfigurasi tambahan, semua perubahan hilang begitu USB dicabut; persistence menyisihkan sebagian ruang USB untuk menyimpan perubahan itu secara permanen. Ini kombinasi yang praktis untuk pentester yang sering berpindah perangkat.' },
      { title: 'Digital forensics tools dasar', desc: 'Autopsy dan dd untuk analisis forensik dan membuat image disk.', detail: 'Digital forensics berfokus pada mengumpulkan dan menganalisis bukti digital tanpa merusak data aslinya. Command dd bisa membuat copy identik (image) dari sebuah disk untuk dianalisis tanpa menyentuh disk asli, sementara Autopsy adalah tools GUI untuk memeriksa image itu — mencari file yang terhapus, riwayat browser, atau metadata. Skill ini penting terutama untuk investigasi insiden setelah sebuah sistem diduga diserang.' },
      { title: 'Wireless tools & monitor mode', desc: 'Mengaktifkan monitor mode pada network card untuk audit keamanan Wi-Fi.', detail: 'Network card biasanya beroperasi dalam mode normal yang hanya menerima paket yang ditujukan untuknya. Monitor mode mengubahnya untuk bisa "mendengar" semua paket wireless di sekitarnya, termasuk handshake WPA/WPA2 yang dibutuhkan tools seperti Aircrack-ng. Tidak semua network card mendukung monitor mode, jadi ini juga pelajaran soal memilih hardware yang cocok untuk wireless auditing.' },
      { title: 'Web app tools ekosistem', desc: 'Mengenal Burp Suite dan OWASP ZAP untuk pengujian aplikasi web di luar sqlmap/nikto.', detail: 'Selain sqlmap dan nikto yang sudah dibahas di command wajib, Burp Suite dan OWASP ZAP adalah dua proxy pengujian web paling populer yang menawarkan fitur lebih lengkap: intercept manual, automated scanning, dan repeater untuk mencoba ulang request yang dimodifikasi. OWASP ZAP gratis dan open-source, cocok untuk pemula, sementara Burp Suite versi Community juga gratis dengan fitur lebih terbatas dibanding versi Pro.' },
      { title: 'Password & hash cracking tools', desc: 'Hashcat sebagai alternatif John the Ripper yang memanfaatkan GPU untuk cracking lebih cepat.', detail: 'Hashcat mirip John the Ripper dari segi tujuan (memecahkan hash password), tapi dioptimalkan untuk memanfaatkan GPU yang jauh lebih cepat dibanding CPU untuk komputasi paralel semacam ini. Memilih antara keduanya biasanya soal hardware yang tersedia dan format hash yang didukung. Keduanya tetap butuh wordlist yang bagus — tool secanggih apa pun tidak akan berhasil kalau wordlist-nya tidak relevan.' },
      { title: 'Reporting & dokumentasi hasil dari Kali', desc: 'Mencatat command dan output selama sesi kerja supaya bisa disusun jadi laporan.', detail: 'Command script bisa merekam seluruh sesi terminal (command dan outputnya) ke satu file, sangat membantu saat harus menyusun laporan setelah sesi pengujian panjang. Kebiasaan screenshot tiap temuan penting dan mencatat command yang dipakai secara real-time jauh lebih mudah dibanding mencoba mengingat semuanya di akhir. Dokumentasi yang rapi ini yang membedakan laporan yang bisa dipercaya dari yang cuma klaim tanpa bukti.' },
      { title: 'Menjaga Kali tetap update & aman', desc: 'Kali sendiri bisa jadi target — patch rutin dan konfigurasi aman tetap penting.', detail: 'Ironisnya, sistem yang dipakai untuk menguji keamanan orang lain juga bisa jadi target serangan kalau tidak dirawat. Update rutin lewat apt update && apt upgrade menutup celah yang mungkin ada di tools atau sistem itu sendiri. Kalau Kali dipakai di jaringan yang tidak tepercaya, mengubah password default dan mematikan service yang tidak perlu adalah langkah dasar yang jangan diabaikan.' }
    ],
    terms: [
      { term: 'Distro', desc: 'Distribusi Linux — versi Linux dengan kumpulan software tertentu, contohnya Kali. Contoh: Ubuntu untuk pemakaian umum, Kali untuk security testing.' },
      { term: 'Terminal', desc: 'Antarmuka teks untuk menjalankan perintah langsung ke sistem. Contoh: mengetik ls untuk melihat isi folder tanpa perlu klik-klik di file manager.' },
      { term: 'Root', desc: 'User dengan akses penuh ke seluruh sistem, dipakai hati-hati. Contoh: hanya login sebagai root saat benar-benar butuh install driver sistem, bukan untuk kerja harian.' },
      { term: 'Package manager (apt)', desc: 'Alat untuk instal/hapus/update software di Debian-based Linux seperti Kali. Contoh: apt install nmap langsung mengunduh dan memasang Nmap dari repository.' },
      { term: 'Repository', desc: 'Server tempat paket software disimpan dan diunduh oleh package manager. Contoh: repository resmi Kali menyimpan ribuan tools security yang sudah diverifikasi.' },
      { term: 'Virtual Machine', desc: 'Komputer virtual yang berjalan di dalam komputer fisik, aman untuk eksperimen. Contoh: menjalankan Kali di VirtualBox tanpa mengganggu Windows yang jadi OS utama.' },
      { term: 'Snapshot', desc: 'Titik simpan kondisi VM yang bisa dikembalikan sewaktu-waktu. Contoh: ambil snapshot sebelum mencoba tool baru, lalu kembalikan kalau tool itu merusak sistem.' },
      { term: 'Live boot', desc: 'Menjalankan Kali langsung dari USB/DVD tanpa instalasi ke disk. Contoh: memakai Kali di komputer lab kampus tanpa mengubah OS yang sudah terinstall.' },
      { term: 'Persistence', desc: 'Menyimpan perubahan pada live boot agar tidak hilang saat restart. Contoh: hasil scan dan tool tambahan yang diinstall tetap ada saat USB dipakai lagi besok.' },
      { term: 'Wordlist', desc: 'Daftar kata/kombinasi yang dipakai untuk percobaan password atau brute force. Contoh: rockyou.txt, wordlist populer berisi jutaan password yang pernah bocor.' },
      { term: 'Rolling Release', desc: 'Model update Kali yang terus-menerus mengirim update terbaru, bukan versi besar berkala. Contoh: tools terbaru langsung tersedia lewat apt update tanpa menunggu "Kali versi berikutnya".' },
      { term: 'Metapackage', desc: 'Paket yang sebenarnya berisi kumpulan paket lain, dipasang sekaligus lewat satu nama. Contoh: kali-linux-headless menginstall banyak tools sekaligus tanpa GUI.' },
      { term: 'Chroot', desc: 'Teknik mengisolasi sebuah proses agar hanya melihat folder tertentu sebagai root filesystem-nya. Contoh: memperbaiki instalasi Kali yang rusak dari live USB dengan chroot ke partisi yang bermasalah.' },
      { term: 'GRUB', desc: 'Bootloader yang menampilkan menu pilihan OS/mode boot saat komputer dinyalakan. Contoh: memilih "Kali GNU/Linux" atau "Advanced options" dari menu GRUB saat startup.' },
      { term: 'Kali NetHunter', desc: 'Versi Kali yang dioptimalkan untuk perangkat Android, membawa sebagian tools Kali ke ponsel. Contoh: melakukan network scanning dasar langsung dari ponsel yang sudah di-root dengan NetHunter.' }
    ],
    commands: [
      { cmd: 'apt update && apt upgrade -y', desc: 'Memperbarui daftar paket dan sistem ke versi terbaru.' },
      { cmd: 'apt install <tool>', desc: 'Menginstall tool baru dari repository Kali.' },
      { cmd: 'sudo su', desc: 'Beralih sementara ke akses root.' },
      { cmd: 'ip link', desc: 'Mengecek interface jaringan yang tersedia di sistem.' },
      { cmd: 'history', desc: 'Melihat daftar command yang pernah dijalankan.' },
      { cmd: 'man <command>', desc: 'Membaca dokumentasi resmi sebuah command.' },
      { cmd: 'which <tool>', desc: 'Mengecek lokasi instalasi sebuah tool di sistem.' },
      { cmd: 'chmod +x script.sh', desc: 'Memberi izin eksekusi pada file script.' },
      { cmd: './script.sh', desc: 'Menjalankan script yang sudah bisa dieksekusi.' },
      { cmd: 'alias ll="ls -la"', desc: 'Membuat shortcut untuk command yang sering dipakai.' }
    ],
    project: {
      title: 'Setup & scan home lab Kali dari terminal',
      desc: 'Praktik langsung memakai command-command Kali di atas, dari instalasi sampai scan jaringan sendiri.',
      steps: [
        'Install Kali Linux di VirtualBox (2 CPU, 4GB RAM), lalu jalankan apt update && apt upgrade -y untuk memastikan sistem terbaru.',
        'Cek interface jaringan VM dengan ip link, catat nama interface aktif (misalnya eth0).',
        'Install tool tambahan yang belum ada dengan apt install nmap net-tools, lalu cek lokasinya dengan which nmap.',
        'Buat script kecil scan.sh yang isinya satu baris: nmap -sV 192.168.56.0/24 — untuk memindai perangkat di jaringan virtual sendiri.',
        'Beri izin eksekusi dengan chmod +x scan.sh, lalu jalankan dengan ./scan.sh.',
        'Buat alias singkat, misalnya alias scanlab="./scan.sh", supaya bisa dipanggil ulang tanpa mengetik path lengkap.',
        'Cek history untuk melihat urutan command yang baru dijalankan, lalu catat di jurnal belajar sendiri.'
      ]
    }
  },
  pentest: {
    concept: {
      nodes: [
        { label: 'Recon', desc: 'Kumpulkan info tentang target.' },
        { label: 'Scanning', desc: 'Temukan port & service terbuka.' },
        { label: 'Enumeration', desc: 'Gali detail lebih dalam.' },
        { label: 'Exploitation', desc: 'Manfaatkan celah untuk masuk.' },
        { label: 'Post-exploit', desc: 'Verifikasi & dokumentasikan akses.' },
        { label: 'Reporting', desc: 'Tulis temuan & rekomendasi.' }
      ],
      mindset: 'Pentest adalah proses bertahap, bukan lompat langsung ke exploit. Setiap fase menyempitkan target sampai celah yang tepat ketemu.'
    },
    steps: [
      { title: 'Metodologi dasar', desc: 'Urutan standar: reconnaissance, scanning, enumeration, exploitation, reporting.', detail: 'Pentest yang baik selalu mengikuti urutan yang sistematis, bukan asal coba-coba exploit yang kebetulan familiar. Reconnaissance adalah fase mengumpulkan informasi tentang target sebanyak mungkin sebelum menyentuhnya secara aktif. Scanning adalah fase aktif mencari pintu masuk yang terbuka. Enumeration menggali lebih detail dari apa yang ditemukan di scanning — versi software, konfigurasi, user yang ada. Exploitation adalah fase memanfaatkan celah yang ditemukan untuk benar-benar mendapatkan akses. Dan reporting adalah fase menutup semuanya dengan mendokumentasikan apa yang ditemukan supaya bisa diperbaiki. Alasan urutan ini penting adalah karena tiap fase membangun informasi untuk fase berikutnya — melompat langsung ke exploitation tanpa recon dan scanning yang cukup biasanya berujung buang-buang waktu.' },
      { title: 'Reconnaissance', desc: 'Kumpulkan informasi publik tentang target tanpa menyentuhnya langsung (OSINT).', detail: 'OSINT (Open Source Intelligence) adalah teknik mengumpulkan informasi dari sumber yang terbuka dan publik — tanpa perlu menyentuh sistem target sama sekali. Ini termasuk mencari informasi domain lewat whois, melihat subdomain yang terdaftar publik, mencari informasi karyawan di LinkedIn, atau bahkan melihat lowongan kerja perusahaan yang kadang membocorkan teknologi apa yang mereka pakai secara internal. Karena sifatnya pasif, recon jenis ini sangat aman dan legal dilakukan bahkan tanpa izin eksplisit — kamu hanya membaca informasi yang sudah tersedia untuk umum. Recon yang baik seringkali menentukan seberapa efektif fase-fase berikutnya; pentester berpengalaman bisa menghabiskan waktu cukup lama di fase ini karena informasi kecil bisa jadi kunci besar nantinya.' },
      { title: 'Scanning & enumeration', desc: 'Temukan port, service, dan versi software yang berjalan.', detail: 'Setelah recon pasif, saatnya beralih ke pendekatan aktif — tapi ini hanya boleh dilakukan pada target yang sudah diizinkan secara eksplisit. Scanning bertujuan menemukan port mana yang terbuka di target dan service apa yang berjalan di masing-masing port itu, biasanya lewat tools seperti Nmap. Enumeration melangkah lebih jauh dari sekadar port ini terbuka menjadi port ini menjalankan Apache versi 2.4.29, dan versi ini punya kerentanan yang sudah dikenal publik. Detail seperti versi software ini krusial karena itulah yang nantinya dicocokkan dengan database exploit yang tersedia. Kesalahan pemula di fase ini biasanya buru-buru pindah ke exploitation begitu menemukan satu port terbuka, padahal informasi yang lebih lengkap dari enumeration menyeluruh bisa membuka lebih banyak jalur masuk.' },
      { title: 'Exploitation dasar', desc: 'Coba eksploitasi celah yang ditemukan di lab legal seperti TryHackMe/HTB.', detail: 'Exploitation adalah momen ketika kamu benar-benar memanfaatkan celah yang ditemukan untuk mendapatkan akses yang seharusnya tidak kamu punya. Ini bisa berupa memanfaatkan bug software yang sudah punya exploit siap pakai, atau kesalahan konfigurasi seperti password default yang tidak pernah diganti. Metasploit Framework sangat populer untuk fase ini karena punya database besar exploit siap pakai yang tinggal dikonfigurasi sesuai target. Penting dipahami bahwa exploitation yang berhasil tidak selalu berarti akses admin penuh — kadang hasilnya cuma akses terbatas sebagai user biasa, yang baru nanti ditingkatkan lewat privilege escalation. Latihan di platform seperti TryHackMe/HackTheBox sangat membantu di fase ini karena mereka memberi target yang sengaja dibuat rentan dengan tingkat kesulitan bertahap.' },
      { title: 'Web app testing', desc: 'Kenali OWASP Top 10: SQL injection, XSS, broken auth, dan lainnya.', detail: 'Aplikasi web punya kategori kerentanan tersendiri, dan OWASP Top 10 adalah daftar yang paling banyak dijadikan acuan industri untuk kerentanan web paling umum dan berbahaya. SQL injection terjadi ketika input pengguna tidak difilter dengan benar sebelum dimasukkan ke query database, memungkinkan penyerang menyuntikkan perintah database mereka sendiri. XSS (Cross-Site Scripting) terjadi ketika input pengguna ditampilkan kembali di halaman tanpa disaring, memungkinkan penyerang menyuntikkan script berbahaya yang dijalankan di browser pengguna lain. Broken authentication mencakup berbagai kesalahan dalam sistem login — dari password yang terlalu lemah dipaksakan diterima, sampai session yang tidak pernah expired. Belajar kategori-kategori ini paling efektif lewat lab yang dirancang khusus seperti DVWA, yang sengaja dibuat rentan dengan tingkat kesulitan yang bisa diatur.' },
      { title: 'Report writing', desc: 'Susun temuan jadi laporan yang bisa dipahami tim non-teknis.', detail: 'Bagian ini sering dianggap paling membosankan oleh pentester, tapi sebenarnya inilah yang menentukan apakah kerja kerasmu di fase-fase sebelumnya benar-benar berdampak. Klien yang membayar pentest biasanya bukan orang teknis, jadi laporan penuh jargon tanpa penjelasan akan diabaikan meskipun temuannya kritis. Struktur laporan yang efektif biasanya diawali ringkasan eksekutif singkat yang menjelaskan gambaran besar risiko tanpa istilah teknis, diikuti detail teknis lengkap untuk tim IT, lalu ditutup dengan rekomendasi konkret yang bisa langsung dikerjakan. Tingkat keparahan setiap temuan (biasanya pakai skala CVSS) juga penting dicantumkan supaya tim bisa memprioritaskan mana yang harus diperbaiki lebih dulu. Kemampuan menulis laporan yang jelas ini sering jadi pembeda antara pentester yang dipercaya berulang kali dan yang hanya dipakai sekali.' },
      { title: 'Post-exploitation & lateral movement', desc: 'Setelah dapat akses awal, bergerak ke sistem lain di jaringan yang sama.', detail: 'Post-exploitation dimulai begitu akses awal berhasil didapat — mengumpulkan informasi lebih lanjut, mencari kredensial yang tersimpan, dan memahami struktur jaringan dari dalam. Lateral movement adalah proses berpindah dari satu mesin yang sudah dikuasai ke mesin lain di jaringan yang sama, karena akses awal seringkali cuma ke sistem yang kurang berharga sementara data penting ada di server lain. Fase ini yang paling menunjukkan dampak nyata sebuah celah keamanan terhadap seluruh jaringan, bukan cuma satu titik.' },
      { title: 'Active Directory attacks dasar', desc: 'Teknik dasar menyerang Active Directory, sistem manajemen user paling umum di perusahaan.', detail: 'Active Directory (AD) adalah sistem Microsoft yang mengelola user, komputer, dan hak akses di hampir semua jaringan perusahaan. Karena begitu sentral, AD jadi target favorit pentester — kesalahan konfigurasi kecil di satu akun bisa membuka jalan ke domain admin (akses tertinggi). Teknik dasar seperti kerberoasting atau pass-the-hash sering dipelajari khusus untuk lingkungan AD, berbeda dari teknik di sistem Linux biasa.' },
      { title: 'Wireless penetration testing', desc: 'Menguji keamanan jaringan Wi-Fi perusahaan, bukan cuma rumah sendiri.', detail: 'Wireless pentest menggabungkan skill dari materi Kali Linux (Aircrack-ng, monitor mode) dengan metodologi pentest formal — recon dulu (SSID apa yang ada), lalu uji kekuatan enkripsi dan konfigurasinya. Selain WPA/WPA2 cracking, pentest wireless juga mengecek rogue access point (AP palsu yang menyamar jaringan asli) yang bisa menipu karyawan terhubung ke jaringan berbahaya.' },
      { title: 'Mobile app pentest dasar', desc: 'Menguji keamanan aplikasi Android/iOS: storage tidak aman, API yang lemah, dan reverse engineering dasar.', detail: 'Aplikasi mobile punya kerentanan khasnya sendiri: data sensitif yang tersimpan tidak terenkripsi di perangkat, komunikasi API yang tidak divalidasi dengan benar, atau kode yang mudah di-reverse-engineer untuk menemukan API key yang tertanam. Tools seperti MobSF membantu otomasi sebagian analisis ini, tapi memahami dulu bagaimana aplikasi mobile berkomunikasi dengan backend tetap jadi fondasi yang tidak bisa dilewati.' },
      { title: 'API security testing', desc: 'Menguji keamanan REST/GraphQL API: broken authorization, rate limiting, dan validasi input.', detail: 'Banyak aplikasi modern sebenarnya cuma tampilan di atas API — kalau API-nya bocor, seluruh sistem di baliknya ikut terekspos. Broken Object Level Authorization (BOLA) adalah salah satu celah API paling umum: user A bisa mengakses data user B hanya dengan mengubah ID di URL request. Testing API butuh tools khusus seperti Postman atau Burp Suite untuk mencoba berbagai skenario request yang tidak seharusnya berhasil.' },
      { title: 'Social engineering dalam scope pentest', desc: 'Menguji kerentanan manusia lewat simulasi phishing terkontrol, dengan izin resmi.', detail: 'Beberapa kontrak pentest secara eksplisit mencakup social engineering — mengirim email phishing simulasi ke karyawan untuk melihat berapa persen yang mengklik atau memasukkan kredensial. Ini selalu dilakukan dengan persetujuan tertulis dan aturan ketat (misalnya tidak boleh menyasar informasi pribadi di luar scope), karena tanpa itu aktivitas ini sama saja dengan phishing sungguhan yang ilegal.' },
      { title: 'Red team vs Blue team & purple teaming', desc: 'Red team menyerang, blue team bertahan, purple teaming menggabungkan keduanya untuk saling belajar.', detail: 'Red team mensimulasikan penyerang sungguhan secara berkelanjutan (berbeda dari pentest yang biasanya waktu terbatas), sementara blue team adalah tim defense yang berusaha mendeteksi dan merespons. Purple teaming adalah pendekatan kolaboratif di mana kedua tim bekerja bersama secara transparan — red team menjelaskan tekniknya, blue team langsung menguji apakah deteksinya berhasil, saling memperkuat dari sesi ke sesi.' },
      { title: 'Bug bounty dasar', desc: 'Program resmi perusahaan yang membayar siapa saja yang menemukan celah keamanan secara legal.', detail: 'Bug bounty adalah cara perusahaan crowdsource pengujian keamanan — siapa pun boleh mencoba menemukan celah di sistem mereka (sesuai aturan program) dan dibayar kalau berhasil menemukan dan melaporkannya dengan benar. Platform seperti HackerOne dan Bugcrowd menghubungkan peneliti keamanan independen dengan program bug bounty dari berbagai perusahaan. Ini jalur populer untuk pentester pemula membangun portofolio nyata sambil berpotensi mendapat penghasilan.' },
      { title: 'Karier & sertifikasi pentest', desc: 'Jalur sertifikasi dari eJPT untuk pemula sampai OSCP yang lebih hands-on dan diakui industri.', detail: 'eJPT (eLearnSecurity Junior Penetration Tester) sering jadi titik awal karena soalnya lebih terjangkau dan cocok untuk pemula. OSCP (Offensive Security Certified Professional) adalah sertifikasi yang jauh lebih dihormati industri karena ujiannya benar-benar hands-on selama 24 jam menembus mesin sungguhan, bukan cuma pilihan ganda. Jalur ini butuh waktu, tapi kombinasi lab TryHackMe/HackTheBox yang konsisten dengan target sertifikasi yang jelas adalah cara paling realistis untuk sampai ke sana.' }
    ],
    terms: [
      { term: 'Recon (OSINT)', desc: 'Pengumpulan informasi dari sumber terbuka sebelum pengujian aktif dimulai. Contoh: mencari subdomain lewat catatan DNS publik sebelum scanning aktif dimulai.' },
      { term: 'Scanning', desc: 'Proses mencari port dan service yang terbuka pada target. Contoh: nmap -p- menemukan port 21, 80, dan 3306 terbuka di server target.' },
      { term: 'Enumeration', desc: 'Menggali detail lebih dalam dari service yang ditemukan, misalnya versi dan konfigurasi. Contoh: mengetahui port 21 menjalankan vsftpd versi 2.3.4 yang punya exploit publik.' },
      { term: 'Exploitation', desc: 'Memanfaatkan celah keamanan untuk mendapat akses ke sistem. Contoh: menjalankan exploit Metasploit untuk vsftpd 2.3.4 dan mendapat shell akses.' },
      { term: 'Privilege escalation', desc: 'Menaikkan level akses dari user biasa menjadi admin/root. Contoh: memanfaatkan file konfigurasi sudo yang salah untuk naik dari user biasa ke root.' },
      { term: 'Payload', desc: 'Kode yang dijalankan pada target setelah eksploitasi berhasil. Contoh: payload reverse shell yang membuka koneksi balik ke komputer penyerang.' },
      { term: 'Reverse shell', desc: 'Koneksi shell dari target kembali ke penyerang, biasanya untuk kontrol jarak jauh. Contoh: target terhubung balik ke listener nc -lvnp 4444 milik penyerang.' },
      { term: 'CVE', desc: 'Common Vulnerabilities and Exposures — ID standar untuk celah keamanan yang sudah didokumentasikan. Contoh: CVE-2021-44228 adalah ID resmi untuk celah Log4Shell.' },
      { term: 'CVSS', desc: 'Skor standar yang menunjukkan seberapa parah suatu celah keamanan. Contoh: skor CVSS 9.8 dari 10 menandakan celah kritis yang harus segera diperbaiki.' },
      { term: 'Pentest report', desc: 'Dokumen hasil pengujian: ringkasan, temuan, risiko, dan rekomendasi perbaikan. Contoh: laporan yang merekomendasikan update vsftpd dan menutup port yang tidak perlu.' },
      { term: 'Lateral Movement', desc: 'Berpindah dari satu sistem yang sudah dikuasai ke sistem lain di jaringan yang sama. Contoh: dari server web yang berhasil dibobol, berpindah ke server database di jaringan internal.' },
      { term: 'Pivoting', desc: 'Menggunakan sistem yang sudah dikuasai sebagai perantara untuk menjangkau jaringan yang tidak bisa diakses langsung. Contoh: memakai server yang sudah diretas sebagai jembatan untuk scan jaringan internal yang tersembunyi.' },
      { term: 'C2 (Command and Control)', desc: 'Server yang dipakai penyerang untuk mengendalikan sistem yang sudah dikuasai dari jarak jauh. Contoh: malware yang terus menghubungi server C2 untuk menerima instruksi baru.' },
      { term: 'Red Team', desc: 'Tim yang mensimulasikan penyerang sungguhan secara berkelanjutan untuk menguji pertahanan organisasi. Contoh: red team mencoba masuk ke jaringan perusahaan tanpa sepengetahuan tim IT selama sebulan.' },
      { term: 'Bug Bounty', desc: 'Program resmi yang membayar siapa saja yang menemukan dan melaporkan celah keamanan secara legal. Contoh: menemukan celah XSS di situs perusahaan dan melaporkannya lewat HackerOne untuk mendapat hadiah.' }
    ],
    commands: [
      { cmd: 'nmap -sV -p- <target>', desc: 'Scan seluruh port dan deteksi versi service yang berjalan.' },
      { cmd: 'nmap -sC -A <target>', desc: 'Scan dengan default script plus deteksi OS dan service.' },
      { cmd: 'gobuster dir -u <url> -w <wordlist>', desc: 'Brute-force direktori/file tersembunyi di web server.' },
      { cmd: 'nikto -h <target>', desc: 'Scan cepat kerentanan umum pada web server.' },
      { cmd: 'sqlmap -u "<url>" --dbs', desc: 'Deteksi otomatis SQL injection dan daftar database yang ditemukan.' },
      { cmd: 'hydra -l admin -P <wordlist> <target> ssh', desc: 'Brute force login SSH atau service lain.' },
      { cmd: 'searchsploit <keyword>', desc: 'Mencari exploit yang cocok dari database Exploit-DB lokal.' },
      { cmd: 'msfconsole', desc: 'Masuk ke Metasploit Framework untuk eksploitasi terstruktur.' },
      { cmd: 'enum4linux <target>', desc: 'Enumerasi share dan user dari target Windows/Samba.' },
      { cmd: 'nc -lvnp 4444', desc: 'Membuka listener untuk menerima koneksi reverse shell.' }
    ],
    project: {
      title: 'Simulasi pentest end-to-end: dari recon sampai dapat akses',
      desc: 'Walkthrough lengkap di target lab legal (contoh: VM Metasploitable2, atau room "Easy" di TryHackMe/HackTheBox) — jangan pernah jalankan ini ke target yang bukan milik sendiri atau tanpa izin tertulis.',
      steps: [
        'Siapkan target lab legal: download VM Metasploitable2 atau pilih room pemula di TryHackMe/HackTheBox, jalankan di jaringan virtual sendiri.',
        'Reconnaissance pasif: kalau target punya domain publik, cek info dasar dengan whois <domain> dan dig <domain>. Untuk lab lokal, langkah ini bisa dilewati.',
        'Scanning port: jalankan nmap -sV -p- <target-ip> untuk menemukan semua port terbuka dan versi service yang jalan di masing-masing port.',
        'Scan lebih dalam: jalankan nmap -sC -A <target-ip> untuk deteksi OS dan kerentanan umum lewat default script Nmap.',
        'Enumeration web (jika ada port 80/443): jalankan gobuster dir -u http://<target-ip> -w /usr/share/wordlists/dirb/common.txt untuk cari direktori tersembunyi, dan nikto -h http://<target-ip> untuk scan kerentanan web umum.',
        'Enumeration service lain (jika ada SMB/Samba): jalankan enum4linux <target-ip> untuk melihat user dan share yang bisa diakses.',
        'Cari exploit yang cocok: dari versi service yang ketemu (contoh: vsftpd 2.3.4), cari exploit siap pakai dengan searchsploit vsftpd 2.3.4.',
        'Eksploitasi dengan Metasploit: jalankan msfconsole, lalu use exploit/unix/ftp/vsftpd_234_backdoor, set RHOSTS <target-ip>, dan run untuk mendapatkan shell awal.',
        'Verifikasi akses: begitu masuk, jalankan whoami dan id untuk memastikan level akses yang berhasil didapat.',
        'Privilege escalation (jika masih user biasa): cek sudo -l untuk lihat command yang bisa dijalankan sebagai root, atau cari exploit kernel yang cocok dengan versi sistemnya.',
        'Post-exploitation: ambil bukti temuan (screenshot, isi flag file) sebagai dokumentasi — jangan mengubah atau menghapus data apa pun di target.',
        'Reporting: tulis laporan singkat berisi target, tools dan command yang dipakai di setiap langkah, celah yang ditemukan, tingkat risikonya, dan rekomendasi perbaikan (misalnya: update vsftpd ke versi terbaru).'
      ]
    }
  },
  github: {
    concept: {
      nodes: [
        { label: 'Working dir', desc: 'Kamu edit file di sini.' },
        { label: 'Staging', desc: 'git add menandai file siap disimpan.' },
        { label: 'Commit', desc: 'Rekaman perubahan tersimpan.' },
        { label: 'Branch/Remote', desc: 'git push ke GitHub.' },
        { label: 'Pull Request', desc: 'Perubahan direview.' },
        { label: 'Merge', desc: 'Digabung ke branch utama.' }
      ],
      mindset: 'Anggap Git sebagai save point bertingkat: kamu selalu bisa kembali, asal rutin commit dengan pesan yang jelas.'
    },
    steps: [
      { title: 'Instalasi & konfigurasi Git', desc: 'Install git, atur nama dan email lewat git config.', detail: 'Sebelum bisa memakai Git, dia perlu tahu siapa kamu supaya setiap perubahan yang kamu buat tercatat dengan identitas yang benar — ini diatur lewat git config --global user.name dan git config --global user.email. Ini penting terutama saat kolaborasi, karena histori commit akan menunjukkan siapa mengubah apa dan kapan. Setelah Git terinstall dan dikonfigurasi, biasanya langkah berikutnya adalah menyiapkan koneksi ke GitHub lewat SSH key atau personal access token, supaya kamu tidak perlu mengetik username-password setiap kali push. Banyak pemula melewatkan tahap setup ini dan langsung loncat ke command git add/commit, lalu bingung kenapa histori commit-nya tercatat dengan nama yang salah atau kenapa push selalu gagal karena autentikasi. Setup yang benar di awal ini investasi kecil yang menghindarkan banyak frustrasi di kemudian hari.' },
      { title: 'Alur dasar lokal', desc: 'git init, add, commit — menyimpan perubahan secara bertahap.', detail: 'Tiga command ini adalah jantung dari cara Git bekerja, dan memahaminya dengan benar akan membuat semua yang lebih kompleks jadi jauh lebih mudah dipahami. git init mengubah sebuah folder biasa jadi folder yang dilacak oleh Git. git add memindahkan perubahan dari working directory ke area yang disebut staging — anggap ini seperti kamu memilih dulu barang mana yang mau dimasukkan ke kotak sebelum benar-benar menyegel kotaknya. git commit menyegel kotak itu dengan pesan penjelasan, membuat sebuah titik simpan permanen dalam histori proyek. Kebiasaan yang baik adalah commit sesering mungkin dengan perubahan kecil dan pesan yang jelas, bukan menumpuk banyak perubahan berbeda jadi satu commit besar dengan pesan update yang tidak jelas.' },
      { title: 'Branching', desc: 'Membuat branch baru untuk fitur/perbaikan tanpa mengganggu main.', detail: 'Branch itu seperti membuat salinan paralel dari kode yang bisa kamu ubah-ubah bebas tanpa mempengaruhi kode utama, sampai kamu yakin perubahan itu sudah siap. Analoginya seperti menulis draft di kertas coretan sebelum menyalinnya ke buku catatan resmi — kamu bebas coba-coba dan bahkan gagal di draft, tanpa merusak yang sudah rapi. Praktik yang umum dipakai tim adalah membuat branch baru untuk setiap fitur atau perbaikan, mengerjakannya di sana, lalu menggabungkannya ke main setelah selesai dan sudah dicek. Ini menjaga branch main selalu dalam kondisi stabil dan siap dipakai, karena perubahan yang masih setengah jadi tidak pernah langsung masuk ke sana. Kebiasaan branching yang disiplin ini yang membedakan proyek yang terasa kacau dari yang terasa terkelola dengan baik.' },
      { title: 'Remote & sinkronisasi', desc: 'push, pull, dan clone untuk kerja dengan repo di GitHub.', detail: 'Sejauh ini Git yang dibahas semuanya terjadi lokal di komputermu — remote adalah cara menyambungkan repo lokal itu ke server seperti GitHub, sehingga kodenya bisa diakses dari mana saja dan dikerjakan bersama orang lain. git push mengirim commit dari komputermu ke GitHub, git pull mengambil perubahan terbaru dari GitHub ke komputermu, dan git clone membuat copy penuh sebuah repository dari GitHub ke komputer, lengkap dengan seluruh histori commit-nya. Kebiasaan yang sangat disarankan sebelum mulai kerja setiap hari adalah git pull dulu, untuk memastikan kamu bekerja dari versi terbaru — mengerjakan sesuatu berdasarkan kode yang sudah usang seringkali berujung konflik yang lebih rumit untuk diselesaikan nanti.' },
      { title: 'Kolaborasi', desc: 'Pull request, code review, dan menyelesaikan merge conflict.', detail: 'Pull Request (PR) adalah cara formal untuk mengajukan saya sudah selesai mengerjakan fitur ini di branch saya, tolong direview dan digabungkan ke main. PR memberi kesempatan orang lain di tim untuk membaca perubahanmu, memberi komentar, atau meminta perbaikan, sebelum kode itu benar-benar masuk ke branch utama. Merge conflict terjadi ketika dua orang mengubah baris kode yang sama di file yang sama di branch berbeda, dan Git tidak tahu versi mana yang harus dipakai — ini terdengar menakutkan buat pemula, tapi sebenarnya cuma butuh kamu membuka file yang konflik, memilih versi yang benar, lalu commit ulang. Yang penting dipahami: konflik itu normal dan bagian biasa dari kolaborasi, bukan tanda kamu melakukan sesuatu yang salah.' },
      { title: 'Otomasi dasar', desc: 'Mengenal GitHub Actions untuk menjalankan test otomatis.', detail: 'GitHub Actions memungkinkan kamu menjalankan serangkaian perintah secara otomatis setiap kali sesuatu terjadi di repository — paling umum, setiap kali ada push atau pull request baru. Contoh paling sederhana adalah menjalankan test otomatis setiap kali ada kode baru, sehingga kalau ada perubahan yang merusak sesuatu, itu ketahuan langsung lewat notifikasi gagal, bukan ketahuan belakangan setelah sudah di-deploy. Workflow ini ditulis dalam file YAML sederhana yang mendefinisikan kapan harus jalan dan apa yang harus dilakukan, disimpan di folder .github/workflows. Untuk proyek kecil, otomasi ini mungkin terasa berlebihan di awal, tapi membiasakan diri dengan konsepnya sejak dini akan sangat membantu ketika nanti bekerja di proyek tim yang lebih besar.' }
    ],
    terms: [
      { term: 'Repository', desc: 'Folder proyek yang dilacak oleh Git, bisa lokal atau di GitHub.' },
      { term: 'Commit', desc: 'Rekaman perubahan tertentu pada kode, disertai pesan penjelasan.' },
      { term: 'Branch', desc: 'Cabang pengembangan terpisah dari branch utama (biasanya main).' },
      { term: 'Merge', desc: 'Menggabungkan perubahan dari satu branch ke branch lain.' },
      { term: 'Pull Request', desc: 'Permintaan untuk menggabungkan branch ke repo utama, biasanya melalui review.' },
      { term: 'Fork', desc: 'Menyalin repo orang lain ke akun sendiri untuk dikembangkan secara independen.' },
      { term: 'Clone', desc: 'Mengunduh copy penuh sebuah repository ke komputer lokal.' },
      { term: '.gitignore', desc: 'File yang mendaftar file/folder yang tidak perlu dilacak Git.' },
      { term: 'Merge conflict', desc: 'Situasi ketika Git tidak bisa otomatis menggabungkan dua perubahan yang bertabrakan.' },
      { term: 'README', desc: 'File dokumentasi utama yang menjelaskan isi dan cara pakai sebuah repository.' }
    ],
    commands: [
      { cmd: 'git init', desc: 'Membuat repository Git baru di folder saat ini.' },
      { cmd: 'git add <file>', desc: 'Memindahkan perubahan file ke staging area.' },
      { cmd: 'git commit -m "pesan"', desc: 'Menyimpan perubahan dari staging area sebagai snapshot permanen.' },
      { cmd: 'git status', desc: 'Melihat status file: mana yang berubah, staged, atau belum dilacak.' },
      { cmd: 'git push origin main', desc: 'Mengunggah commit lokal ke repository remote di GitHub.' },
      { cmd: 'git pull', desc: 'Menarik perubahan terbaru dari remote ke lokal.' },
      { cmd: 'git branch nama-branch', desc: 'Membuat branch baru untuk fitur/perbaikan terpisah.' },
      { cmd: 'git checkout -b nama-branch', desc: 'Membuat dan langsung berpindah ke branch baru.' },
      { cmd: 'git merge nama-branch', desc: 'Menggabungkan branch lain ke branch yang sedang aktif.' },
      { cmd: 'git log', desc: 'Melihat riwayat commit di repository.' }
    ],
    project: {
      title: 'Kontribusi pertama ke proyek open source',
      desc: 'Latihan alur kolaborasi Git yang sebenarnya, bukan cuma lokal.',
      steps: [
        'Fork sebuah repo open source kecil yang menerima kontribusi pemula.',
        'Clone hasil fork ke komputer, buat branch baru untuk perubahan kecil.',
        'Commit perubahan dengan pesan yang jelas, lalu push ke fork sendiri.',
        'Buka Pull Request ke repo asli dan tulis deskripsi perubahan yang dilakukan.'
      ]
    }
  },
  ielts: {
    concept: {
      nodes: [
        { label: 'Input', desc: 'Dengar (listening) & baca (reading).' },
        { label: 'Pemahaman', desc: 'Tangkap makna dari input itu.' },
        { label: 'Struktur', desc: 'Pahami grammar di balik kalimat.' },
        { label: 'Output', desc: 'Bicara (speaking) & tulis (writing).' },
        { label: 'Feedback', desc: 'Revisi dari kesalahan yang muncul.' }
      ],
      mindset: 'Perbanyak input dulu (listening & reading) sebelum memaksa output (speaking & writing) — vocabulary dan grammar akan terasa lebih natural.'
    },
    steps: [
      { title: 'Tes diagnostik', desc: 'Coba satu full test dulu untuk tahu titik lemah di 4 skill.', detail: 'Sebelum menyusun rencana belajar, kamu perlu tahu dulu titik awalmu sebenarnya di mana — bukan menebak-nebak berdasarkan perasaan kayaknya listening-ku oke. Kerjakan satu full test IELTS resmi dengan kondisi semirip mungkin dengan ujian asli: waktu yang dibatasi, tanpa gangguan, dan dinilai objektif setelahnya. Hasil dari tes ini akan menunjukkan skill mana yang paling lemah dan butuh perhatian lebih, karena seringkali persepsi diri sendiri tidak akurat — banyak orang merasa reading-nya kuat, padahal begitu dites ternyata sering salah di soal True/False/Not Given. Simpan hasil tes diagnostik ini sebagai baseline, supaya nanti kamu bisa membandingkan progres secara objektif.' },
      { title: 'Fokus per skill', desc: 'Latihan terpisah untuk Listening, Reading, Writing, dan Speaking.', detail: 'IELTS menguji empat skill yang berbeda, dan masing-masing butuh strategi latihan yang berbeda pula — menganggap belajar Inggris sebagai satu hal besar yang campur aduk biasanya kurang efektif. Alokasikan waktu latihan terpisah untuk masing-masing skill berdasarkan hasil diagnostik: kalau listening paling lemah, beri porsi lebih besar di sana, tapi jangan sampai skill lain terbengkalai sepenuhnya. Yang perlu diingat, keempat skill ini juga saling menguatkan satu sama lain — vocabulary dari reading akan membantu writing, dan pola kalimat yang sering didengar di listening akan membantu speaking terasa lebih natural. Jadwal latihan yang realistis biasanya lebih efektif dan tahan lama dibanding belajar marathon sesekali lalu berhenti berminggu-minggu.' },
      { title: 'Perkuat Writing', desc: 'Pelajari struktur Task 1 (laporan data) dan Task 2 (esai argumentatif).', detail: 'Writing IELTS punya dua task dengan tuntutan yang sangat berbeda. Task 1 meminta kamu mendeskripsikan data visual secara objektif — tantangannya adalah menulis akurat tanpa opini pribadi, dan mengorganisir informasi kompleks jadi paragraf yang mengalir logis. Task 2 adalah esai argumentatif, dinilai dari empat aspek: Task Response, Coherence & Cohesion, Lexical Resource, dan Grammatical Range. Strategi yang membantu banyak orang adalah punya template struktur yang fleksibel — pendahuluan, dua paragraf isi, dan kesimpulan — supaya di bawah tekanan waktu 40 menit kamu tidak kehabisan ide untuk mengorganisir jawaban. Yang penting: template membantu struktur, tapi isi argumennya tetap harus orisinal dan relevan dengan soal.' },
      { title: 'Perkuat Speaking', desc: 'Latihan Part 1-3 dengan rekaman diri sendiri untuk evaluasi.', detail: 'Speaking terdiri dari tiga bagian dengan gaya berbeda: Part 1 adalah obrolan ringan tentang dirimu, Part 2 adalah monolog 2 menit tentang topik dari cue card setelah 1 menit persiapan, dan Part 3 adalah diskusi lebih dalam terkait tema Part 2. Bagian yang paling sering membuat orang blank adalah Part 2, karena harus bicara terus-menerus selama 2 menit penuh. Strategi yang efektif adalah memakai 1 menit persiapan untuk menulis catatan singkat berupa kata kunci, lalu biarkan dirimu bicara mengalir dari poin-poin itu. Merekam diri sendiri saat latihan dan mendengarkannya kembali adalah cara paling jujur untuk menemukan kebiasaan buruk yang biasanya tidak kamu sadari saat sedang bicara langsung.' },
      { title: 'Perkuat Listening & Reading', desc: 'Latihan skimming, scanning, dan prediksi jawaban.', detail: 'Listening dan Reading IELTS sama-sama menguji kemampuan menangkap informasi dengan cepat dan akurat, tapi dengan tantangan berbeda. Di Listening, kamu hanya dengar sekali tanpa bisa replay, jadi strategi predicting — membaca soal dulu sebelum audio dimulai untuk menebak jenis informasi apa yang akan muncul — sangat membantu. Section 4 biasanya paling sulit karena berbentuk monolog akademik panjang tanpa dialog dan tanpa jeda. Di Reading, skimming dan scanning adalah dua teknik berbeda yang harus dikuasai keduanya — jangan membaca setiap kata secara detail dari awal, karena waktu 60 menit untuk 40 soal itu sangat ketat. Soal True/False/Not Given sering jadi jebakan karena bedanya False dan Not Given itu halus dan butuh latihan berulang untuk benar-benar peka membedakannya.' },
      { title: 'Simulasi ujian penuh', desc: 'Mock test lengkap dengan waktu sungguhan mendekati hari ujian.', detail: 'Setelah latihan per skill cukup matang, kamu perlu menjahit semuanya kembali jadi simulasi ujian yang utuh — karena stamina mental untuk fokus selama hampir 3 jam adalah skill tersendiri yang tidak terlatih kalau kamu hanya latihan per bagian secara terpisah. Lakukan mock test lengkap dengan kondisi semirip mungkin hari ujian asli: waktu yang benar-benar dibatasi, tanpa kamus, di tempat yang tenang. Setelah selesai, jangan cuma lihat skornya — analisis pola kesalahan yang konsisten muncul supaya sisa waktu belajar bisa difokuskan ke pola kesalahan spesifik itu, bukan belajar random tanpa arah. Idealnya, lakukan simulasi penuh ini setidaknya 2-3 kali dengan jarak beberapa minggu sebelum hari ujian sungguhan.' }
    ],
    terms: [
      { term: 'Band score', desc: 'Skor IELTS dari 1-9 yang menunjukkan level kemampuan bahasa.' },
      { term: 'Task Response', desc: 'Kriteria penilaian Writing: seberapa lengkap jawaban menjawab soal.' },
      { term: 'Coherence & Cohesion', desc: 'Kriteria penilaian: kelancaran alur ide dan penggunaan kata penghubung.' },
      { term: 'Lexical Resource', desc: 'Kriteria penilaian: variasi dan ketepatan pilihan kata (vocabulary).' },
      { term: 'Grammatical Range', desc: 'Kriteria penilaian: variasi struktur kalimat dan akurasi grammar.' },
      { term: 'Skimming', desc: 'Membaca cepat untuk menangkap gambaran umum teks.' },
      { term: 'Scanning', desc: 'Membaca cepat untuk mencari informasi spesifik, misalnya angka atau nama.' },
      { term: 'Paraphrase', desc: 'Menyampaikan ide yang sama dengan kata-kata berbeda.' },
      { term: 'Cue card', desc: 'Kartu topik yang diberikan di Speaking Part 2 untuk bicara 2 menit.' },
      { term: 'Linking words', desc: 'Kata penghubung seperti however, therefore, in addition untuk merangkai ide.' }
    ],
    project: {
      title: 'Simulasi mingguan menuju target band',
      desc: 'Rutinitas latihan terstruktur menuju hari ujian.',
      steps: [
        'Kerjakan satu set soal Reading dan Listening dengan waktu asli setiap minggu.',
        'Tulis satu esai Task 2 lalu bandingkan dengan contoh esai band 7+.',
        'Rekam satu jawaban Speaking Part 2, dengarkan ulang dan catat kata yang diulang-ulang.',
        'Review error grammar yang paling sering muncul dari writing minggu itu.'
      ]
    }
  },
  spanish: {
    concept: {
      nodes: [
        { label: 'Bunyi', desc: 'Pengucapan huruf & aksen.' },
        { label: 'Kosakata', desc: 'Kata benda, kerja, sifat dasar.' },
        { label: 'Gender & artikel', desc: 'el/la menempel di tiap kata.' },
        { label: 'Konjugasi', desc: 'Kata kerja berubah sesuai subjek.' },
        { label: 'Percakapan', desc: 'Gabungkan semua jadi kalimat nyata.' }
      ],
      mindset: 'Jangan hafal kata benda sendirian — selalu pasangkan dengan artikelnya (el/la) sejak awal, biar gender-nya nempel otomatis di kepala.'
    },
    steps: [
      { title: 'Alfabet & pengucapan', desc: 'Cara membaca huruf dan bunyi khas Spanish seperti "rr" dan "ñ".', detail: 'Kabar baiknya, Spanish termasuk bahasa yang pengucapannya cukup konsisten dengan tulisannya dibanding bahasa lain seperti Inggris — begitu kamu tahu aturannya, kamu bisa membaca kata baru dengan cukup percaya diri. Beberapa bunyi unik yang perlu latihan khusus: "rr" yang digulung (rolled r), "ñ" yang dibaca seperti "ny" dalam kata Indonesia nyanyi, dan huruf "j" yang dibaca seperti "h" yang lebih kasar di tenggorokan. Aksen (á, é, í) menunjukkan suku kata mana yang harus ditekankan saat diucapkan, dan ini sering menentukan arti kata yang berbeda meski tulisannya hampir sama. Latihan paling efektif bukan menghafal aturan secara teori, tapi mendengarkan native speaker berulang-ulang dan menirukan bunyinya sampai mulut dan telinga terbiasa dengan pola suara yang baru.' },
      { title: 'Kosakata dasar', desc: 'Salam, angka, hari, dan kata benda sehari-hari.', detail: 'Sebelum bisa membentuk kalimat, kamu butuh bahan bakunya dulu — kosakata dasar untuk hal-hal yang paling sering dipakai sehari-hari: salam, angka, hari dan bulan, serta kata benda umum di rumah dan aktivitas harian. Strategi yang lebih efektif dibanding menghafal daftar kata acak adalah belajar kosakata dalam konteks — misalnya semua kata yang berhubungan dengan "di restoran" sekaligus, karena otak lebih mudah mengingat kata yang saling berhubungan. Flashcard (fisik atau aplikasi seperti Anki) sangat membantu di tahap ini karena memakai teknik spaced repetition — kata yang sudah kamu kuasai muncul lebih jarang, sementara yang masih sering salah muncul lebih sering. Target realistis untuk pemula adalah sekitar 300-500 kata dasar sebelum mulai terasa nyaman membentuk kalimat sederhana.' },
      { title: 'Ser vs Estar', desc: 'Dua kata kerja "menjadi" dengan penggunaan yang berbeda.', detail: 'Ini salah satu konsep yang paling sering membingungkan pemula karena bahasa Indonesia hanya punya satu kata "menjadi/adalah", sementara Spanish punya dua kata kerja berbeda, tergantung sifatnya permanen atau sementara. Ser dipakai untuk hal yang relatif tetap: identitas (soy Ana), asal (soy de Indonesia), profesi, atau sifat karakter yang melekat. Estar dipakai untuk kondisi yang bisa berubah: lokasi (estoy en casa), perasaan saat ini (estoy feliz), atau kondisi sementara. Cara paling praktis membedakannya bukan menghafal aturan abstrak, tapi menghafal lewat contoh konkret berpasangan — misalnya "él es aburrido" (dia orangnya membosankan) versus "él está aburrido" (dia sedang bosan) — perbedaan makna inilah yang justru jadi cara paling cepat untuk benar-benar paham, bukan cuma hafal.' },
      { title: 'Konjugasi present tense', desc: 'Mengubah kata kerja sesuai subjek (yo, tú, él/ella, dst).', detail: 'Konjugasi adalah perubahan bentuk kata kerja sesuai siapa yang melakukan tindakan itu — sesuatu yang di bahasa Indonesia tidak ada, tapi di Spanish kata kerjanya berubah bentuk untuk masing-masing subjek. Kabar baiknya, mayoritas kata kerja Spanish mengikuti tiga pola akhiran yang cukup teratur (-ar, -er, -ir), jadi begitu kamu hafal satu pola, bisa diterapkan ke ratusan kata kerja lain yang sejenis. Ada juga kata kerja tidak teratur yang polanya berbeda dan harus dihafal terpisah, tapi biasanya ini kata kerja yang paling sering dipakai seperti ser, estar, ir, tener. Latihan terbaik untuk konjugasi bukan menghafal tabel di kertas, tapi langsung mencoba membuat kalimat sendiri dengan berbagai subjek — yo hablo, tú hablas, ella habla — sampai perubahannya terasa otomatis.' },
      { title: 'Percakapan sehari-hari', desc: 'Latihan dialog: perkenalan, restoran, arah jalan.', detail: 'Setelah punya kosakata dan sedikit tata bahasa dasar, saatnya menggabungkan semuanya jadi percakapan yang benar-benar bisa dipakai — bukan lagi latihan kata atau kalimat terisolasi. Skenario yang paling praktis untuk dilatih pertama adalah yang paling sering ditemui: perkenalan diri, memesan makanan di restoran, dan menanyakan arah jalan. Cara efektif melatih ini adalah menulis dulu skrip percakapan sederhana, memastikan grammar dan vocabulary-nya benar, menghafalkannya, lalu benar-benar mempraktikkannya — entah dengan partner belajar, tutor online, atau bicara sendiri di depan cermin. Jangan menunggu sampai merasa siap sebelum mencoba bicara sungguhan, karena justru dari kesalahan saat bicara langsung itulah kamu belajar paling cepat.' },
      { title: 'Tenses lanjutan', desc: 'Preterito dan subjuntivo untuk cerita masa lalu dan pengandaian.', detail: 'Setelah nyaman dengan present tense, langkah berikutnya adalah bisa menceritakan sesuatu yang sudah terjadi dan yang belum pasti terjadi — dua kebutuhan komunikasi yang sangat umum sehari-hari. Pretérito adalah bentuk lampau untuk kejadian yang sudah selesai dengan jelas, misalnya "ayer comí pizza" (kemarin saya makan pizza) — ada juga bentuk lampau lain (imperfecto) untuk kejadian yang berulang di masa lalu. Subjuntivo lebih menantang lagi karena dipakai untuk mengekspresikan keinginan, keraguan, emosi, atau sesuatu yang belum pasti — konsep yang di bahasa Indonesia tidak punya bentuk kata kerja terpisah untuk itu. Jangan terburu-buru menguasai kedua ini secara sempurna sebelum banyak berlatih present tense — fondasi yang kuat akan membuat tenses lanjutan ini jauh lebih mudah dipahami.' }
    ],
    terms: [
      { term: 'Ser / Estar', desc: 'Ser untuk sifat permanen (identitas, asal), Estar untuk kondisi sementara (lokasi, perasaan).' },
      { term: 'Conjugación', desc: 'Perubahan bentuk kata kerja sesuai subjek dan waktu.' },
      { term: 'Género', desc: 'Gender kata benda: masculino atau femenino, menentukan artikel yang dipakai.' },
      { term: 'Artículo', desc: 'Kata sandang seperti el, la, los, las yang menyertai kata benda.' },
      { term: 'Pronombre', desc: 'Kata ganti seperti yo, tú, él, nosotros.' },
      { term: 'Subjuntivo', desc: 'Bentuk kata kerja untuk keinginan, keraguan, atau pengandaian.' },
      { term: 'Pretérito', desc: 'Bentuk lampau untuk kejadian yang sudah selesai.' },
      { term: 'Vocabulario', desc: 'Kumpulan kosakata dalam suatu bahasa.' }
    ],
    project: {
      title: 'Rekam percakapan restoran 1 menit',
      desc: 'Latihan speaking sederhana memakai kosakata dan tata bahasa dasar.',
      steps: [
        'Tulis skrip pendek: menyapa pelayan, memesan makanan, meminta bill.',
        'Cek penggunaan Ser/Estar dan artikel di setiap kalimat.',
        'Hafalkan skrip lalu rekam diri sendiri mengucapkannya.',
        'Dengarkan ulang dan tandai kata yang pengucapannya masih ragu.'
      ]
    }
  },
  deutsch: {
    concept: {
      nodes: [
        { label: 'Bunyi', desc: 'Pengucapan, termasuk umlaut.' },
        { label: 'Kosakata', desc: 'Kata benda, kerja, sifat dasar.' },
        { label: 'Artikel & gender', desc: 'der/die/das menempel di kata.' },
        { label: 'Kasus', desc: 'Nominativ & Akkusativ mengubah bentuk.' },
        { label: 'Kalimat', desc: 'Urutan kata yang ketat.' }
      ],
      mindset: 'Deutsch punya urutan kata yang ketat. Fokus dulu ke artikel dan kasus sebelum bicara panjang, karena keduanya mengubah bentuk kata lain di kalimat.'
    },
    steps: [
      { title: 'Alphabet & pengucapan', desc: 'Bunyi khas Deutsch seperti umlaut (ä, ö, ü) dan "ch".', detail: 'Deutsch punya beberapa bunyi yang tidak ada di bahasa Indonesia dan butuh latihan khusus untuk telinga dan mulut yang belum terbiasa. Umlaut (ä, ö, ü) mengubah bunyi vokal biasa jadi bunyi baru yang cukup berbeda — misalnya "ü" diucapkan dengan bibir dimonyongkan seperti mau bilang "u" tapi lidah di posisi "i". Kombinasi huruf "ch" punya dua bunyi berbeda tergantung huruf sebelumnya — setelah a/o/u dibaca lebih berat di tenggorokan, sementara setelah i/e/ä/ö/ü dibaca lebih halus mendekati "sy". Huruf "w" dibaca seperti "v", dan "v" sendiri kadang dibaca seperti "f" — kebalikan dari intuisi orang yang baru belajar. Cara belajar pengucapan yang paling efektif bukan menghafal aturan fonetik secara teori, tapi banyak mendengarkan native speaker dan menirukannya berulang-ulang.' },
      { title: 'Kosakata dasar', desc: 'Salam, angka, dan kata benda sehari-hari.', detail: 'Membangun kosakata dasar Deutsch mirip bahasa lain — mulai dari salam, angka, hari, dan kata benda sehari-hari — tapi ada satu kebiasaan penting yang harus dibangun sejak awal: setiap kata benda di Deutsch punya gender (der/die/das) yang menentukan bentuk kata lain di sekitarnya, jadi jangan pernah menghafal kata benda tanpa artikelnya sejak hari pertama. Kata benda majemuk (compound nouns) adalah ciri khas unik Deutsch yang awalnya terlihat menakutkan karena bisa sangat panjang, tapi begitu kamu tahu triknya — kata panjang itu biasanya cuma gabungan dari kata-kata pendek yang sudah kamu kenal, disambung jadi satu — kata yang tadinya terlihat rumit jadi terasa lebih masuk akal begitu dipecah.' },
      { title: 'Artikel & gender', desc: 'Der, die, das — tiga gender yang menentukan bentuk kata lain.', detail: 'Ini kemungkinan konsep paling membuat frustrasi bagi pemula Deutsch, karena tidak ada pola yang benar-benar bisa diandalkan 100% untuk menebak gender sebuah kata benda — der untuk maskulin, die untuk feminin, das untuk neutral, dan tidak selalu logis (misalnya "das Mädchen" - anak perempuan - justru pakai artikel neutral). Meski begitu, ada beberapa pola yang cukup membantu: kata benda berakhiran -e biasanya feminin, dan kata benda berakhiran -chen atau -lein selalu neutral. Strategi paling realistis bukan menghafal aturan-aturan ini secara terpisah, tapi membiasakan diri selalu belajar kata benda bersama artikelnya sebagai satu paket sejak awal — misalnya bukan menghafal "Tisch" sendirian, tapi "der Tisch" sebagai satu kesatuan yang tidak terpisahkan.' },
      { title: 'Kasus dasar', desc: 'Nominativ dan Akkusativ untuk subjek dan objek kalimat.', detail: 'Kasus (Fall) adalah konsep yang mengubah bentuk artikel dan kata sifat tergantung peran kata benda itu di dalam kalimat, dan ini juga tidak ada konsepnya di bahasa Indonesia. Nominativ dipakai untuk subjek kalimat — "der Mann sieht" (laki-laki itu melihat). Akkusativ dipakai untuk objek langsung — "ich sehe den Mann" (saya melihat laki-laki itu) — perhatikan "der" berubah jadi "den" karena sekarang jadi objek. Perubahan bentuk artikel inilah yang paling sering membuat pemula bingung. Ada dua kasus lain (Dativ dan Genitiv) yang lebih kompleks dan biasanya dipelajari setelah dua kasus dasar ini benar-benar dikuasai — jangan buru-buru pindah ke kasus lanjutan sebelum Nominativ dan Akkusativ terasa otomatis.' },
      { title: 'Konjugasi kata kerja', desc: 'Perubahan kata kerja sesuai subjek di present tense.', detail: 'Seperti Spanish, kata kerja Deutsch juga berubah bentuk sesuai subjeknya, dan sebagian besar kata kerja reguler mengikuti pola akhiran yang cukup konsisten. Modalverben seperti können (bisa), müssen (harus), wollen (mau), dan möchten (ingin) punya pola konjugasi yang sedikit berbeda dan dipakai sangat sering dalam percakapan sehari-hari, jadi worth dihafal lebih awal. Yang unik di Deutsch, saat memakai modalverben, kata kerja utama diletakkan dalam bentuk dasarnya di akhir kalimat — misalnya "ich möchte ein Buch lesen" (saya ingin membaca buku), bukan di tengah seperti kebiasaan bahasa Indonesia. Kebiasaan meletakkan kata kerja di posisi tertentu inilah yang mengarah ke topik berikutnya: urutan kata yang cukup ketat aturannya.' },
      { title: 'Kalimat sehari-hari', desc: 'Latihan dialog pendek: perkenalan, belanja, arah jalan.', detail: 'Setelah paham artikel, kasus, dan konjugasi dasar, saatnya menggabungkan semuanya jadi kalimat yang benar-benar dipakai dalam percakapan nyata — mulai dari perkenalan diri, berbelanja, dan menanyakan arah jalan. Urutan kata (Wortstellung) Deutsch punya aturan yang cukup ketat dibanding bahasa Indonesia — dalam kalimat pernyataan biasa, kata kerja utama selalu berada di posisi kedua dalam kalimat, tidak peduli apa yang ada di posisi pertama, sebuah aturan yang butuh waktu untuk terasa natural. Latihan dialog pendek untuk skenario konkret adalah cara paling efektif di tahap ini — tuliskan dulu skrip sederhana, periksa artikel dan urutan katanya, hafalkan, lalu praktikkan dengan bicara keras-keras. Jangan berkecil hati kalau di awal kalimat yang kamu susun terasa kaku — ini normal dan akan terasa lebih otomatis seiring semakin banyak dipraktikkan.' }
    ],
    terms: [
      { term: 'Artikel (der/die/das)', desc: 'Kata sandang yang menunjukkan gender kata benda: maskulin, feminin, neutral.' },
      { term: 'Fall (Kasus)', desc: 'Empat kasus tata bahasa Deutsch: Nominativ, Akkusativ, Dativ, Genitiv.' },
      { term: 'Konjugation', desc: 'Perubahan bentuk kata kerja sesuai subjek kalimat.' },
      { term: 'Modalverben', desc: 'Kata kerja modal seperti können (bisa), müssen (harus), wollen (mau).' },
      { term: 'Perfekt', desc: 'Bentuk lampau yang umum dipakai dalam percakapan sehari-hari.' },
      { term: 'Wortstellung', desc: 'Urutan kata dalam kalimat Deutsch, yang punya aturan tersendiri.' }
    ],
    project: {
      title: 'Tulis Steckbrief (perkenalan diri)',
      desc: 'Latihan menulis singkat memakai kosakata dan artikel dasar.',
      steps: [
        'Tulis nama, umur, asal, dan hobi dalam 5 kalimat sederhana.',
        'Periksa artikel der/die/das pada setiap kata benda yang dipakai.',
        'Tambahkan 2 kalimat pakai kata kerja modal (möchten, können).',
        'Baca ulang keras-keras untuk latihan pengucapan.'
      ]
    }
  }
};

export const skills = {
  ielts: [
    {
      key: 'reading', label: 'Reading',
      intro: 'IELTS Reading terdiri dari 3 teks panjang dengan total 40 soal dalam 60 menit. Tipe soal bervariasi: Multiple Choice, True/False/Not Given, Matching, dan Sentence/Summary Completion.',
      materials: [
        'Skimming untuk gambaran umum sebelum membaca detail per paragraf',
        'Scanning untuk mencari kata kunci, angka, atau nama spesifik',
        'Kenali sinonim — soal jarang memakai kata yang sama persis dengan teks aslinya',
        'Perhatikan kata absolut seperti "only", "always", "never" — sering jadi kunci True/False/Not Given',
        'Kelola waktu: sekitar 20 menit per teks, jangan terpaku di satu soal sulit'
      ],
      context: 'Bacaan (contoh orisinal, gaya IELTS Academic):\n\n"Urban beekeeping has grown rapidly in cities such as London, New York and Paris over the last decade. Many residents now keep hives on apartment balconies or office rooftops, partly to support declining bee populations and partly to produce their own honey. However, some experts warn that packing too many hives into a small area can cause bees to compete for the same flowers, which may do more harm than good. Local councils in several cities have begun requiring beekeepers to register their hives so this competition can be monitored."',
      questions: [
        { prompt: 'True/False/Not Given: "Urban beekeeping has become more common in the last ten years."', answer: 'True', explanation: 'Teks menyebut "over the last decade" yang berarti sekitar sepuluh tahun terakhir — sesuai dengan pernyataan soal.' },
        { prompt: 'True/False/Not Given: "All urban beekeepers register their hives with local councils."', answer: 'False', explanation: 'Teks hanya menyebut "several cities" yang mewajibkan registrasi, bukan semua — jadi pernyataan "all" bertentangan dengan teks.' },
        { prompt: 'True/False/Not Given: "Most beekeepers began keeping bees for financial reasons."', answer: 'Not Given', explanation: 'Teks menyebut alasan mendukung populasi lebah dan memproduksi madu sendiri, tapi tidak pernah membahas alasan finansial sama sekali.' },
        { prompt: 'Sentence completion: "According to some experts, too many hives in one area can cause bees to compete for the same ____."', answer: 'flowers', explanation: 'Kalimat di teks persis menyebut "compete for the same flowers" sebagai risiko dari terlalu banyak sarang di area kecil.' },
        { prompt: 'Multiple choice: What is one reason cited for the growth of urban beekeeping?', options: ['Government subsidies', 'Declining bee populations', 'Rising honey prices', 'Tourism'], answer: 'Declining bee populations', explanation: 'Teks menyebut orang memelihara lebah "partly to support declining bee populations" sebagai salah satu alasan utamanya.' }
      ]
    },
    {
      key: 'listening', label: 'Listening',
      intro: 'IELTS Listening punya 4 section dengan total 40 soal, dan audio hanya diputar SEKALI. Section 1-2 lebih conversational, Section 3-4 lebih akademik.',
      materials: [
        'Section 1 biasanya form/note completion — dengarkan angka, nama, dan spelling dengan teliti',
        'Section 4 adalah monolog akademik tanpa jeda — baca soal dulu untuk memprediksi topik',
        'Perhatikan kata sinyal seperti "however", "actually" — sering menandakan jawaban berubah di kalimat berikutnya',
        'Jawaban harus sesuai jumlah kata yang diminta (misalnya "NO MORE THAN TWO WORDS")',
        'Tulis jawaban langsung saat mendengar — jangan menunggu sampai audio selesai'
      ],
      context: 'Transkrip singkat (simulasi Section 1 — booking percakapan):\n\nWoman: Hi, I would like to book a place on the pottery class for next month.\nMan: Sure, we have two options — Tuesday evenings or Saturday mornings.\nWoman: I will take Saturday.\nMan: Great, that will be 45 dollars, and can I get your name?\nWoman: It is Sandra Mitchell, M-I-T-C-H-E-L-L.\nMan: And a contact number?\nWoman: 0412 558 903.',
      questions: [
        { prompt: 'Note completion: Class day: ____', answer: 'Saturday', explanation: 'Wanita itu memilih opsi "Saturday mornings" setelah ditawari dua pilihan hari.' },
        { prompt: 'Note completion: Cost: $____', answer: '45', explanation: 'Petugas menyebut biayanya langsung: "that will be 45 dollars".' },
        { prompt: 'Spelling: Surname: ____', answer: 'MITCHELL', explanation: 'Nama dieja huruf per huruf: "M-I-T-C-H-E-L-L", ini pola umum soal spelling nama di Section 1.' },
        { prompt: 'Multiple choice: What is being booked?', options: ['Cooking class', 'Pottery class', 'Yoga class', 'Swimming lesson'], answer: 'Pottery class', explanation: 'Kalimat pembuka menyebut "book a place on the pottery class" secara eksplisit.' },
        { prompt: 'Note completion: Contact number: ____', answer: '0412 558 903', explanation: 'Nomor disebut langsung sebagai jawaban atas pertanyaan "a contact number?" — dengarkan digit satu-satu.' }
      ]
    },
    {
      key: 'speaking', label: 'Speaking',
      intro: 'Speaking terdiri dari 3 part: Part 1 obrolan ringan tentang diri sendiri, Part 2 monolog 2 menit dari cue card, Part 3 diskusi lebih dalam terkait tema Part 2.',
      materials: [
        'Part 1: jawab 2-3 kalimat dengan alasan, jangan cuma "yes/no"',
        'Part 2: pakai 1 menit persiapan untuk menulis kata kunci, bukan kalimat penuh',
        'Part 3: berikan opini dengan alasan dan contoh konkret, bukan jawaban satu kalimat',
        'Variasikan grammar (conditional, comparative) untuk skor Grammatical Range',
        'Wajar untuk sedikit ragu — yang dinilai kelancaran keseluruhan, bukan kesempurnaan'
      ],
      questions: [
        { prompt: 'Part 1: "What do you do in your free time?"', explanation: 'Pendekatan: sebutkan aktivitas, tambahkan alasan singkat dan frekuensi — misalnya "I usually read novels on weekends because it helps me relax after a busy week."' },
        { prompt: 'Part 1: "Do you prefer living in a house or an apartment?"', explanation: 'Pendekatan: pilih satu, beri 1-2 alasan konkret (biaya, ruang, lokasi) — hindari jawaban netral seperti "both are fine".' },
        { prompt: 'Part 2 Cue Card: "Describe a skill you would like to learn. You should say: what it is, why you want to learn it, how you would learn it, and explain how useful it would be."', explanation: 'Pendekatan: gunakan 4 poin cue card sebagai kerangka paragraf, alokasikan waktu rata sekitar 30 detik per poin agar bicara penuh 2 menit.' },
        { prompt: 'Part 3: "Do you think skills learned in childhood are more important than those learned as an adult?"', explanation: 'Pendekatan: berikan opini jelas di awal, dukung dengan satu contoh (misalnya bahasa atau musik), lalu akui sudut pandang berbeda secara singkat.' },
        { prompt: 'Part 3: "How has technology changed the way people learn new skills?"', explanation: 'Pendekatan: bandingkan cara belajar dulu vs sekarang (kursus online, video tutorial), beri contoh spesifik agar jawaban tidak terasa generik.' }
      ]
    },
    {
      key: 'writing', label: 'Writing',
      intro: 'Writing terdiri dari Task 1 (mendeskripsikan data/proses secara objektif, minimal 150 kata) dan Task 2 (esai argumentatif, minimal 250 kata), total 60 menit.',
      materials: [
        'Task 1: jangan beri opini, cukup laporkan tren dan bandingkan data utama',
        'Task 1 proses/diagram: jelaskan urutan langkah, sering pakai passive voice',
        'Task 2: baca soal dua kali, pastikan menjawab SEMUA bagian pertanyaan',
        'Gunakan linking words (however, therefore, in addition) untuk Coherence & Cohesion',
        'Sisakan 5 menit terakhir untuk cek grammar dan ejaan, bukan menulis ide baru'
      ],
      questions: [
        { prompt: 'Task 1: "The chart below shows the percentage of households with internet access in three countries between 2005 and 2020. Summarise the information by selecting and reporting the main features."', explanation: 'Pendekatan: satu paragraf overview (tren umum), lalu detail per negara dengan perbandingan — tanpa opini pribadi.' },
        { prompt: 'Task 1: "The diagram shows the process of recycling plastic bottles. Summarise the information."', explanation: 'Pendekatan: jelaskan tahapan berurutan (collection, sorting, melting, dst) memakai kata penghubung urutan (first, then, finally) dan passive voice.' },
        { prompt: 'Task 2: "Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?"', explanation: 'Pendekatan: esai opini — nyatakan posisi di pendahuluan, dua paragraf isi dengan argumen berbeda, kesimpulan menegaskan ulang opini.' },
        { prompt: 'Task 2: "Some people think that the government should provide financial support for artists. Others believe art should be funded by private sources. Discuss both views and give your opinion."', explanation: 'Pendekatan: esai discuss-both-views — satu paragraf untuk tiap sisi, opini pribadi bisa disisipkan di kesimpulan atau disebar di kedua paragraf.' },
        { prompt: 'Task 2: "Many people believe social media has had a negative effect on both individuals and society. To what extent do you agree?"', explanation: 'Pendekatan: tentukan posisi (agree/disagree/partial), dukung dengan contoh konkret seperti dampak pada kesehatan mental atau penyebaran misinformasi.' }
      ]
    },
    {
      key: 'grammar', label: 'Grammar',
      intro: 'IELTS tidak punya section grammar terpisah, tapi Grammatical Range and Accuracy dinilai langsung di Writing dan Speaking — jadi akurasi grammar tetap krusial untuk band score tinggi.',
      materials: [
        'Kuasai third conditional (if + past perfect, would have + V3) untuk membahas penyesalan/hipotesis masa lalu',
        'Perhatikan subject-verb agreement pada frasa seperti "the number of"',
        'Bedakan "since" (titik waktu) dan "for" (durasi waktu)',
        'Variasikan linking words — jangan hanya mengulang "and" dan "but"',
        'Cek preposisi setelah kata tertentu, misalnya "despite" (tanpa "of") vs "in spite of"'
      ],
      questions: [
        { prompt: 'Choose the correct form: "If I ____ (know) about the traffic, I would have left earlier."', answer: 'had known', explanation: 'Ini third conditional — untuk hipotesis di masa lalu, pola yang benar adalah if + past perfect, would have + past participle.' },
        { prompt: 'Identify the error: "Despite of the rain, we went outside."', answer: 'Hapus kata "of" → "Despite the rain, we went outside."', explanation: '"Despite" tidak diikuti "of" (berbeda dengan "in spite of" yang memang butuh "of").' },
        { prompt: 'Choose correct: "The number of students ____ increased this year." A) have B) has', options: ['have', 'has'], answer: 'has', explanation: '"The number of" dianggap subjek tunggal, jadi kata kerjanya "has", meskipun diikuti kata benda jamak "students".' },
        { prompt: 'Correct the sentence: "She has been living here since five years."', answer: '"She has been living here for five years."', explanation: '"Since" dipakai untuk titik waktu (since 2019), sedangkan "for" dipakai untuk durasi (for five years).' },
        { prompt: 'Choose the correct linking word: "____ the difficulties, the project was completed on time." A) Although B) Despite C) However', options: ['Although', 'Despite', 'However'], answer: 'Despite', explanation: '"Despite" diikuti langsung oleh frasa benda ("the difficulties"), sedangkan "Although" butuh klausa lengkap dan "However" dipakai di awal kalimat baru dengan koma.' }
      ]
    }
  ],
  spanish: [
    {
      key: 'reading', label: 'Lectura',
      intro: 'Bagian membaca ala DELE (Instituto Cervantes) level pemula: membaca teks pendek lalu menjawab soal pemahaman — pilihan ganda, benar/salah, dan isian singkat.',
      materials: [
        'Baca judul dan kalimat pertama dulu untuk menebak topik teks',
        'Perhatikan kata kerja ser/estar dan waktunya (presente, pasado) untuk memahami konteks',
        'Cari kata kunci yang muncul di pertanyaan langsung di dalam teks',
        'Jangan menerjemahkan kata per kata — pahami makna kalimat secara keseluruhan',
        'Kosakata keluarga, rutinitas, dan tempat sangat sering muncul di level pemula'
      ],
      context: 'Texto: "Marta vive en Madrid con su familia. Todos los días, ella se levanta a las siete y media y desayuna con su hermano. Después, camina veinte minutos hasta la escuela porque le gusta hacer ejercicio. Por la tarde, estudia español y ayuda a su madre en la cocina. Los fines de semana, Marta y su familia visitan a sus abuelos, que viven cerca del parque."',
      questions: [
        { prompt: '¿A qué hora se levanta Marta?', options: ['A las seis', 'A las siete y media', 'A las ocho'], answer: 'A las siete y media', explanation: 'El texto dice claramente "se levanta a las siete y media".' },
        { prompt: 'Verdadero/Falso: "Marta va a la escuela en autobús."', answer: 'Falso', explanation: 'El texto dice que ella "camina veinte minutos hasta la escuela", no menciona autobús.' },
        { prompt: '¿Por qué camina a la escuela?', options: ['Porque no hay autobús', 'Porque le gusta hacer ejercicio', 'Porque vive lejos'], answer: 'Porque le gusta hacer ejercicio', explanation: 'El texto dice "camina... porque le gusta hacer ejercicio", una razón explícita.' },
        { prompt: 'Completa: "Los abuelos de Marta viven cerca del ____."', answer: 'parque', explanation: 'La última frase del texto menciona "que viven cerca del parque".' },
        { prompt: '¿Qué hace Marta por la tarde?', answer: 'Estudia español y ayuda a su madre en la cocina.', explanation: 'Esta información aparece directamente en la tercera oración del texto.' }
      ]
    },
    {
      key: 'listening', label: 'Comprensión auditiva',
      intro: 'Latihan mendengarkan dialog pendek sehari-hari (restoran, toko) khas soal DELE A1-A2, lalu menjawab pertanyaan berdasarkan isi percakapan.',
      materials: [
        'Dengarkan dulu secara utuh sebelum menjawab, jangan berhenti di kata yang tidak dikenal',
        'Angka, waktu, dan nama tempat sering jadi target pertanyaan',
        'Perhatikan siapa yang berbicara — dialog biasanya melibatkan 2 orang dengan peran berbeda',
        'Kata tanya seperti "qué", "cuánto", "dónde" menentukan jenis informasi yang dicari',
        'Latihan dengan podcast atau video pendek berbahasa Spanish mempertajam telinga'
      ],
      context: 'Transcripción: Camarero: "Buenas tardes, ¿qué desean?" Cliente: "Buenas tardes. Yo quiero una ensalada y un agua mineral, por favor." Camarero: "¿Y para usted?" Cliente 2: "Para mí, una sopa y un café." Camarero: "Muy bien. ¿Algo más?" Cliente: "No, gracias, eso es todo."',
      questions: [
        { prompt: '¿Cuántas personas están pidiendo comida?', answer: 'Dos', explanation: 'Hay dos clientes hablando con el camarero, cada uno pide algo diferente.' },
        { prompt: '¿Qué pide el primer cliente?', options: ['Sopa y café', 'Ensalada y agua mineral', 'Ensalada y café'], answer: 'Ensalada y agua mineral', explanation: 'El primer cliente dice: "Yo quiero una ensalada y un agua mineral".' },
        { prompt: '¿Qué bebida pide el segundo cliente?', answer: 'Café', explanation: 'El segundo cliente dice: "Para mí, una sopa y un café".' },
        { prompt: 'Verdadero/Falso: "Los clientes piden postre."', answer: 'Falso', explanation: 'El cliente dice "No, gracias, eso es todo", indicando que no piden nada más, incluyendo postre.' },
        { prompt: '¿Dónde ocurre esta conversación?', options: ['En una casa', 'En un restaurante', 'En una tienda'], answer: 'En un restaurante', explanation: 'La presencia de un camarero tomando pedidos de comida indica claramente un restaurante.' }
      ]
    },
    {
      key: 'speaking', label: 'Expresión oral',
      intro: 'Latihan berbicara level pemula: perkenalan diri, rutinitas, keluarga, dan role-play situasi sehari-hari seperti memesan makanan.',
      materials: [
        'Gunakan ser untuk identitas (soy...) dan estar untuk kondisi/lokasi (estoy...)',
        'Konjugasikan kata kerja sesuai subjek — jangan selalu memakai bentuk "yo"',
        'Latihan role-play membantu kosakata terasa lebih natural dibanding menghafal daftar kata',
        'Rekam dan dengarkan ulang suara sendiri untuk cek pengucapan "rr" dan "ñ"',
        'Siapkan 3-4 kalimat cadangan untuk topik umum (keluarga, hobi, rutinitas)'
      ],
      questions: [
        { prompt: '"Preséntate: ¿cómo te llamas, de dónde eres y qué haces?"', explanation: 'Pendekatan: gunakan struktur "Me llamo..., soy de..., trabajo/estudio..." — kombinasi ser untuk identitas dan asal.' },
        { prompt: '"Describe tu rutina diaria."', explanation: 'Pendekatan: urutkan kegiatan dengan kata penghubung waktu seperti "primero", "después", "luego", memakai kata kerja presente yang dikonjugasikan benar.' },
        { prompt: '"Habla sobre tu familia."', explanation: 'Pendekatan: gunakan vocabulario keluarga (madre, hermano, abuela) dan posesivo (mi, tu, su) — misalnya "mi hermano se llama..."' },
        { prompt: '"¿Qué te gusta hacer los fines de semana?"', explanation: 'Pendekatan: gunakan struktur "gustar" dengan benar — "me gusta + infinitivo" (me gusta leer) bukan "me gusta + kata benda saja" kecuali tunggal.' },
        { prompt: '"Pide comida en un restaurante (role-play)."', explanation: 'Pendekatan: gunakan frasa sopan seperti "Quisiera...", "¿Me puede traer...?", dan latihan respons terhadap pertanyaan camarero.' }
      ]
    },
    {
      key: 'writing', label: 'Expresión escrita',
      intro: 'Latihan menulis pendek level pemula: deskripsi diri, email informal, dan dialog sederhana — fokus pada struktur kalimat yang benar, bukan kerumitan ide.',
      materials: [
        'Mulai dengan kalimat sederhana sebelum mencoba kalimat kompleks',
        'Perhatikan kesesuaian gender kata benda dengan artikel dan kata sifat',
        'Email informal punya struktur: saludo, cuerpo, despedida (misalnya "Hola...", isi, "Un abrazo")',
        'Gunakan conector sederhana: "y", "pero", "porque", "también"',
        'Baca ulang tulisanmu untuk cek konjugasi kata kerja sebelum dianggap selesai'
      ],
      questions: [
        { prompt: '"Escribe una descripción corta de ti mismo (5 líneas)."', explanation: 'Pendekatan: gabungkan ser (identidad) dan estar (estado), misalnya "Soy... Tengo... Estoy..." — jangan lupa artikel dan gender kata benda.' },
        { prompt: '"Escribe un correo a un amigo invitándolo a una fiesta."', explanation: 'Pendekatan: pakai struktur email informal — salam pembuka, isi undangan dengan detail (día, hora, lugar), dan penutup akrab.' },
        { prompt: '"Describe tu casa o habitación."', explanation: 'Pendekatan: gunakan "hay" untuk menyebut keberadaan benda (hay una mesa) dan "está" untuk lokasi (la mesa está cerca de la ventana).' },
        { prompt: '"Escribe sobre tus planes para el próximo fin de semana."', explanation: 'Pendekatan: gunakan struktur futuro informal "ir a + infinitivo", misalnya "voy a visitar a mis abuelos".' },
        { prompt: '"Escribe un diálogo corto en un restaurante."', explanation: 'Pendekatan: gunakan frasa yang sama seperti latihan speaking — "Quisiera...", "¿Cuánto cuesta...?" — dalam format dialog dua orang.' }
      ]
    },
    {
      key: 'grammar', label: 'Gramática',
      intro: 'Latihan tata bahasa dasar Spanish: konjugasi presente, artikel dan gender, serta perbedaan ser/estar yang paling sering jadi sumber kesalahan pemula.',
      materials: [
        'Ser: identitas, asal, profesi, sifat permanen. Estar: lokasi, kondisi sementara, perasaan',
        'Kata kerja -ar, -er, -ir punya pola konjugasi presente yang berbeda',
        'Setiap kata benda punya gender (masculino/femenino) yang menentukan artikel (el/la)',
        'Posesivo (mi, tu, su) tidak berubah bentuk berdasarkan gender pemilik, tapi berdasarkan kata benda yang dimiliki',
        'Kata sifat harus sesuai gender dan jumlah dengan kata benda yang diterangkan'
      ],
      questions: [
        { prompt: 'Completa: "Yo ____ (ser) de Indonesia."', answer: 'soy', explanation: '"Ser" untuk subjek "yo" berbentuk "soy" — dipakai untuk menyatakan asal (identitas permanen).' },
        { prompt: 'Elige correcto: "Ella ____ feliz hoy." A) es B) está', options: ['es', 'está'], answer: 'está', explanation: '"Feliz hoy" menunjukkan kondisi/perasaan sementara, jadi memakai "estar" bukan "ser".' },
        { prompt: 'Conjuga: "Nosotros ____ (hablar) español."', answer: 'hablamos', explanation: 'Kata kerja "-ar" seperti "hablar" untuk subjek "nosotros" berakhiran "-amos".' },
        { prompt: 'Elige el artículo correcto: "____ mesa es grande." A) El B) La', options: ['El', 'La'], answer: 'La', explanation: '"Mesa" adalah kata benda feminin, jadi artikelnya "la", bukan "el".' },
        { prompt: 'Completa con el posesivo correcto: "Esta es ____ (mi) casa."', answer: 'mi', explanation: '"Mi" dipakai untuk menyatakan kepemilikan orang pertama tunggal, tidak berubah bentuk untuk kata benda tunggal feminin/maskulin.' }
      ]
    }
  ],
  deutsch: [
    {
      key: 'reading', label: 'Leseverstehen',
      intro: 'Latihan membaca level A1-A2 khas format Goethe-Institut: teks pendek tentang kehidupan sehari-hari, lalu soal pemahaman.',
      materials: [
        'Baca judul dan kalimat pertama untuk menebak topik sebelum membaca detail',
        'Perhatikan artikel (der/die/das) untuk membantu mengenali kata benda penting',
        'Kata kerja biasanya berada di posisi kedua dalam kalimat pernyataan — bantu menemukan aksi utama',
        'Kosakata rutinitas harian dan pekerjaan sangat sering muncul di level ini',
        'Jangan panik dengan kata benda majemuk panjang — coba pecah jadi kata-kata yang lebih familiar'
      ],
      context: 'Text: "Lisa wohnt in Berlin. Sie arbeitet in einem Büro und steht jeden Morgen um sechs Uhr auf. Zuerst trinkt sie einen Kaffee, dann fährt sie mit dem Fahrrad zur Arbeit. Am Wochenende trifft sie ihre Freunde im Park oder geht ins Kino. Am Abend liest sie gern ein Buch, bevor sie schlafen geht."',
      questions: [
        { prompt: 'Wann steht Lisa auf?', options: ['Um fünf Uhr', 'Um sechs Uhr', 'Um sieben Uhr'], answer: 'Um sechs Uhr', explanation: 'Der Text sagt direkt: "steht jeden Morgen um sechs Uhr auf".' },
        { prompt: 'Richtig/Falsch: "Lisa fährt mit dem Auto zur Arbeit."', answer: 'Falsch', explanation: 'Der Text sagt "fährt sie mit dem Fahrrad zur Arbeit", also mit dem Fahrrad, nicht mit dem Auto.' },
        { prompt: 'Was macht Lisa am Wochenende?', answer: 'Sie trifft ihre Freunde im Park oder geht ins Kino.', explanation: 'Diese Information steht direkt im dritten Satz des Textes.' },
        { prompt: 'Ergänzen Sie: "Am Abend liest Lisa gern ein ____."', answer: 'Buch', explanation: 'Der letzte Satz sagt: "liest sie gern ein Buch, bevor sie schlafen geht".' },
        { prompt: 'Wo wohnt Lisa?', options: ['München', 'Hamburg', 'Berlin'], answer: 'Berlin', explanation: 'Der erste Satz sagt klar: "Lisa wohnt in Berlin".' }
      ]
    },
    {
      key: 'listening', label: 'Hörverstehen',
      intro: 'Latihan mendengarkan dialog pendek sehari-hari (toko, transaksi) khas soal Goethe A1-A2.',
      materials: [
        'Dengarkan seluruh dialog dulu sebelum mencoba menjawab detail',
        'Angka (harga, ukuran) dan warna sering jadi target pertanyaan',
        'Perhatikan siapa yang bertanya dan siapa yang menjawab dalam dialog',
        'Kata tanya "was", "wie viel", "wo" menentukan jenis jawaban yang dicari',
        'Latihan dengan audio asli (podcast Deutsch pemula) membantu telinga terbiasa dengan intonasi'
      ],
      context: 'Transkript: Verkäufer: "Guten Tag! Kann ich Ihnen helfen?" Kundin: "Ja, ich suche eine Jacke, Größe M." Verkäufer: "Wir haben diese blaue Jacke hier. Sie kostet 45 Euro." Kundin: "Gut, ich nehme sie. Kann ich mit Karte bezahlen?" Verkäufer: "Ja, natürlich."',
      questions: [
        { prompt: 'Was möchte die Kundin kaufen?', options: ['Ein Hemd', 'Eine Jacke', 'Schuhe'], answer: 'Eine Jacke', explanation: 'Die Kundin sagt direkt: "ich suche eine Jacke".' },
        { prompt: 'Welche Größe sucht sie?', answer: 'M', explanation: 'Sie sagt "Größe M" direkt nach dem Wort Jacke.' },
        { prompt: 'Richtig/Falsch: "Die Jacke ist rot."', answer: 'Falsch', explanation: 'Der Verkäufer beschreibt "diese blaue Jacke", also blau, nicht rot.' },
        { prompt: 'Wie viel kostet die Jacke?', answer: '45 Euro', explanation: 'Der Verkäufer sagt direkt: "Sie kostet 45 Euro".' },
        { prompt: 'Wie bezahlt die Kundin?', options: ['Bar', 'Mit Karte', 'Mit Scheck'], answer: 'Mit Karte', explanation: 'Die Kundin fragt "Kann ich mit Karte bezahlen?" und der Verkäufer bestätigt es.' }
      ]
    },
    {
      key: 'speaking', label: 'Sprechen',
      intro: 'Latihan berbicara level pemula: perkenalan diri, rutinitas, keluarga, dan role-play situasi sehari-hari seperti berbelanja.',
      materials: [
        'Ingat aturan posisi kedua: kata kerja utama selalu di posisi kedua dalam kalimat pernyataan',
        'Gunakan Possessivartikel (mein, dein) sesuai gender kata benda yang dimiliki',
        'Modalverben (möchten, können) sangat berguna untuk permintaan sopan',
        'Latihan role-play membuat kosakata terasa lebih natural dibanding menghafal daftar kata',
        'Rekam dan dengarkan ulang suara sendiri untuk cek pengucapan umlaut dan "ch"'
      ],
      questions: [
        { prompt: '"Stellen Sie sich vor: Wie heißen Sie, woher kommen Sie?"', explanation: 'Pendekatan: gunakan struktur "Ich heiße..., ich komme aus..." — perhatikan posisi kata kerja tetap di posisi kedua.' },
        { prompt: '"Beschreiben Sie Ihren Tagesablauf."', explanation: 'Pendekatan: urutkan kegiatan dengan kata waktu seperti "zuerst", "dann", "danach", kata kerja dikonjugasikan sesuai subjek "ich".' },
        { prompt: '"Sprechen Sie über Ihre Familie."', explanation: 'Pendekatan: gunakan Possessivartikel yang sesuai — "mein Bruder", "meine Schwester" — perhatikan perbedaan gender.' },
        { prompt: '"Was machen Sie gern in der Freizeit?"', explanation: 'Pendekatan: gunakan modalverben seperti "Ich mag..." atau "Ich kann gut..." untuk menyebut hobi dengan variasi struktur.' },
        { prompt: '"Bestellen Sie etwas in einem Restaurant (Rollenspiel)."', explanation: 'Pendekatan: gunakan frasa sopan seperti "Ich möchte...", "Können Sie mir... bringen?" — latihan respons terhadap pertanyaan pelayan.' }
      ]
    },
    {
      key: 'writing', label: 'Schreiben',
      intro: 'Latihan menulis pendek level pemula: perkenalan diri, email informal, dan dialog sederhana — fokus pada struktur kalimat dan artikel yang benar.',
      materials: [
        'Mulai dengan kalimat sederhana dengan urutan kata yang benar sebelum mencoba kalimat kompleks',
        'Selalu cek artikel (der/die/das) tiap kata benda yang dipakai',
        'Email informal punya struktur: Anrede (salam), Text (isi), Grußformel (penutup)',
        'Gunakan konektor sederhana: "und", "aber", "weil", "auch"',
        'Baca ulang tulisanmu untuk cek posisi kata kerja sebelum dianggap selesai'
      ],
      questions: [
        { prompt: '"Schreiben Sie eine kurze Selbstvorstellung (5 Sätze)."', explanation: 'Pendekatan: gunakan struktur "Ich heiße... Ich bin... Ich komme aus..." — perhatikan kata kerja selalu di posisi kedua tiap kalimat.' },
        { prompt: '"Schreiben Sie eine E-Mail an einen Freund und laden Sie ihn zu einer Party ein."', explanation: 'Pendekatan: pakai struktur email informal — salam ("Hallo..."), isi undangan dengan detail (wann, wo), penutup akrab ("Bis bald!").' },
        { prompt: '"Beschreiben Sie Ihre Wohnung."', explanation: 'Pendekatan: gunakan "es gibt" untuk menyebut keberadaan ruangan/benda dan artikel yang benar untuk tiap kata benda.' },
        { prompt: '"Schreiben Sie über Ihre Pläne für das Wochenende."', explanation: 'Pendekatan: gunakan struktur futur informal "werden + Infinitiv" atau cukup presente dengan keterangan waktu "am Wochenende".' },
        { prompt: '"Schreiben Sie einen kurzen Dialog in einem Geschäft."', explanation: 'Pendekatan: gunakan frasa yang sama seperti latihan speaking — "Ich möchte...", "Wie viel kostet...?" — dalam format dialog dua orang.' }
      ]
    },
    {
      key: 'grammar', label: 'Grammatik',
      intro: 'Latihan tata bahasa dasar Deutsch: konjugasi presente, artikel dan gender, serta kasus Nominativ/Akkusativ yang paling sering jadi sumber kesalahan pemula.',
      materials: [
        'Setiap kata benda punya gender (der/die/das) yang harus dihafal bersama kata bendanya',
        'Kasus Akkusativ mengubah artikel "der" menjadi "den" saat menjadi objek langsung',
        'Kata kerja -en punya pola konjugasi presente yang cukup teratur untuk subjek berbeda',
        'Possessivpronomen (mein, dein) menyesuaikan dengan kata benda yang dimiliki, bukan pemiliknya',
        'Modalverben menempatkan kata kerja utama dalam bentuk dasar di akhir kalimat'
      ],
      questions: [
        { prompt: 'Ergänzen Sie: "Ich ____ (sein) Student."', answer: 'bin', explanation: '"Sein" untuk subjek "ich" berbentuk "bin" — kata kerja tidak beraturan yang wajib dihafal terpisah.' },
        { prompt: 'Wählen Sie den richtigen Artikel: "____ Tisch ist groß." A) Der B) Die C) Das', options: ['Der', 'Die', 'Das'], answer: 'Der', explanation: '"Tisch" adalah kata benda maskulin, jadi artikelnya "der".' },
        { prompt: 'Konjugieren Sie: "Wir ____ (kommen) aus Indonesien."', answer: 'kommen', explanation: 'Kata kerja "-en" seperti "kommen" untuk subjek "wir" tetap berakhiran "-en" (pola presente teratur).' },
        { prompt: 'Wählen Sie den Akkusativ: "Ich sehe ____ Mann." A) der B) den C) das', options: ['der', 'den', 'das'], answer: 'den', explanation: '"Mann" menjadi objek langsung (Akkusativ), sehingga artikel "der" berubah menjadi "den".' },
        { prompt: 'Ergänzen Sie das Possessivpronomen: "Das ist ____ (mein) Buch."', answer: 'mein', explanation: '"Mein" dipakai karena "Buch" adalah kata benda neutral tunggal — bentuk possessivpronomen tidak berubah untuk kasus Nominativ neutral.' }
      ]
    }
  ]
};

export const quiz = {
  cyber: [
    { q: 'Apa singkatan dari CIA dalam CIA Triad?', options: ['Confidentiality, Integrity, Availability', 'Central Intelligence Agency', 'Cyber Incident Analysis', 'Confidential Information Access'], answerIndex: 0, explanation: 'CIA Triad merujuk pada Confidentiality, Integrity, dan Availability — tiga pilar keamanan informasi.' },
    { q: 'Command apa yang dipakai untuk melihat port yang terbuka di sistem?', options: ['ping', 'ss -tulnp', 'whoami', 'cat'], answerIndex: 1, explanation: 'ss -tulnp menampilkan port dan koneksi yang sedang terbuka di sistem.' },
    { q: 'Apa fungsi firewall?', options: ['Mengenkripsi data', 'Menyaring trafik jaringan berdasarkan aturan', 'Menghapus malware otomatis', 'Membuat backup data'], answerIndex: 1, explanation: 'Firewall menyaring trafik masuk/keluar jaringan berdasarkan aturan yang ditetapkan.' },
    { q: 'Apa itu zero-day?', options: ['Hari pertama kerja di tim security', 'Celah keamanan yang belum diketahui vendor', 'Serangan yang terjadi tengah malam', 'Backup data harian'], answerIndex: 1, explanation: 'Zero-day adalah celah keamanan yang belum diketahui vendor sehingga belum ada patch-nya.' },
    { q: 'VPN berguna untuk?', options: ['Mempercepat internet', 'Membuat koneksi terenkripsi lewat jaringan publik', 'Menghapus virus', 'Menyimpan password'], answerIndex: 1, explanation: 'VPN membuat terowongan terenkripsi antar perangkat lewat internet publik.' }
  ],
  webdev: [
    { q: 'Tag HTML apa yang membungkus seluruh isi yang tampil di browser?', options: ['<head>', '<body>', '<html>', '<div>'], answerIndex: 1, explanation: '<body> berisi seluruh konten yang benar-benar tampil di browser.' },
    { q: 'Hook React apa yang dipakai untuk state lokal sederhana?', options: ['useEffect', 'useState', 'useContext', 'useMemo'], answerIndex: 1, explanation: 'useState adalah hook dasar untuk menyimpan state di level satu komponen.' },
    { q: 'Apa itu DOM?', options: ['Bahasa styling CSS', 'Representasi halaman HTML sebagai struktur objek', 'Server database', 'Format file gambar'], answerIndex: 1, explanation: 'DOM (Document Object Model) adalah representasi halaman HTML sebagai struktur pohon objek.' },
    { q: "Fungsi 'fetch' di JavaScript dipakai untuk?", options: ['Styling elemen', 'Mengambil data dari API', 'Membuat animasi', 'Validasi form'], answerIndex: 1, explanation: 'fetch dipakai untuk meminta/mengambil data dari alamat API tertentu.' },
    { q: 'Model layout CSS satu dimensi untuk menyusun elemen sejajar disebut?', options: ['Grid', 'Flexbox', 'Float', 'Table'], answerIndex: 1, explanation: 'Flexbox adalah model layout satu dimensi untuk menyusun elemen sejajar dalam baris/kolom.' }
  ],
  webdesign: [
    { q: 'Apa beda wireframe dan mockup?', options: ['Sama saja', 'Wireframe fokus struktur tanpa visual, mockup sudah berwarna', 'Mockup untuk mobile saja', 'Wireframe untuk developer saja'], answerIndex: 1, explanation: 'Wireframe adalah sketsa struktur tanpa detail visual, sedangkan mockup sudah punya warna, font, dan gambar.' },
    { q: 'Rasio kontras minimum WCAG AA untuk teks normal?', options: ['2:1', '3:1', '4.5:1', '7:1'], answerIndex: 2, explanation: 'WCAG AA mensyaratkan rasio kontras minimum 4.5:1 untuk teks berukuran normal.' },
    { q: 'UX adalah singkatan dari?', options: ['User Experience', 'User Extension', 'Universal Exchange', 'User Export'], answerIndex: 0, explanation: 'UX (User Experience) adalah keseluruhan pengalaman pengguna saat memakai produk.' },
    { q: 'Apa itu design system?', options: ['Software desain grafis', 'Kumpulan aturan & komponen desain yang konsisten', 'Font khusus untuk logo', 'Tools prototyping'], answerIndex: 1, explanation: 'Design system adalah kumpulan aturan, komponen, dan token desain yang dipakai konsisten di seluruh produk.' },
    { q: 'Kenapa whitespace penting dalam desain?', options: ['Menghemat tinta printer', 'Membantu keterbacaan dan fokus', 'Membuat halaman lebih cepat load', 'Tidak penting'], answerIndex: 1, explanation: 'Whitespace membantu keterbacaan dan mengarahkan fokus pengguna ke elemen penting.' }
  ],
  kali: [
    { q: 'Command untuk update daftar paket di Kali?', options: ['apt install', 'apt update', 'apt remove', 'apt list'], answerIndex: 1, explanation: 'apt update memperbarui daftar paket yang tersedia dari repository.' },
    { q: 'Apa itu snapshot pada VM?', options: ['Screenshot layar', 'Titik simpan kondisi VM yang bisa dikembalikan', 'File instalasi Kali', 'Jenis firewall'], answerIndex: 1, explanation: 'Snapshot adalah titik simpan kondisi VM yang bisa dikembalikan sewaktu-waktu.' },
    { q: 'Apa fungsi command chmod?', options: ['Mengubah nama file', 'Mengubah izin akses file', 'Menghapus file', 'Mengcopy file'], answerIndex: 1, explanation: 'chmod dipakai untuk mengubah izin akses (permission) sebuah file.' },
    { q: 'Kali Linux berbasis distro apa?', options: ['Fedora', 'Arch', 'Debian', 'CentOS'], answerIndex: 2, explanation: 'Kali Linux adalah distribusi yang berbasis Debian.' },
    { q: 'Command untuk melihat interface jaringan yang tersedia?', options: ['ip link', 'cat', 'ls', 'history'], answerIndex: 0, explanation: 'ip link menunjukkan interface jaringan apa saja yang tersedia di sistem.' }
  ],
  pentest: [
    { q: 'Apa urutan pertama dalam metodologi pentest?', options: ['Exploitation', 'Reconnaissance', 'Reporting', 'Enumeration'], answerIndex: 1, explanation: 'Reconnaissance adalah fase pertama: mengumpulkan informasi sebelum menyentuh target secara aktif.' },
    { q: 'Apa itu OSINT?', options: ['Alat exploit otomatis', 'Informasi dari sumber terbuka dan publik', 'Jenis malware', 'Sistem enkripsi'], answerIndex: 1, explanation: 'OSINT (Open Source Intelligence) adalah pengumpulan informasi dari sumber yang terbuka dan publik.' },
    { q: 'Tool apa yang biasa dipakai untuk scanning port?', options: ['Nmap', 'Photoshop', 'Excel', 'Notepad'], answerIndex: 0, explanation: 'Nmap adalah tool standar untuk pemetaan jaringan dan port scanning.' },
    { q: 'Apa itu privilege escalation?', options: ['Menghapus akses user', 'Menaikkan level akses dari user biasa ke admin/root', 'Mengganti password', 'Membuat user baru'], answerIndex: 1, explanation: 'Privilege escalation adalah proses menaikkan level akses dari user biasa menjadi admin/root.' },
    { q: 'CVE adalah?', options: ['Nama tool hacking', 'ID standar untuk celah keamanan yang terdokumentasi', 'Sertifikasi security', 'Jenis firewall'], answerIndex: 1, explanation: 'CVE (Common Vulnerabilities and Exposures) adalah ID standar untuk celah keamanan yang sudah didokumentasikan.' }
  ],
  github: [
    { q: 'Command untuk memindahkan perubahan ke staging area?', options: ['git commit', 'git add', 'git push', 'git clone'], answerIndex: 1, explanation: 'git add memindahkan perubahan dari working directory ke staging area.' },
    { q: 'Apa itu Pull Request?', options: ['Menghapus branch', 'Permintaan menggabungkan branch ke repo utama lewat review', 'Command untuk push', 'Jenis file konfigurasi'], answerIndex: 1, explanation: 'Pull Request adalah permintaan formal untuk menggabungkan branch ke repo utama, biasanya lewat review.' },
    { q: 'Apa fungsi .gitignore?', options: ['Menghapus semua file', 'Mendaftar file/folder yang tidak perlu dilacak Git', 'Mengganti nama repo', 'Membuat branch baru'], answerIndex: 1, explanation: '.gitignore mendaftar file/folder yang sengaja tidak dilacak oleh Git.' },
    { q: 'git clone digunakan untuk?', options: ['Menghapus repo', 'Mengunduh copy penuh sebuah repository', 'Mengganti nama file', 'Membuat pull request'], answerIndex: 1, explanation: 'git clone mengunduh copy penuh sebuah repository, lengkap dengan histori commit-nya.' },
    { q: 'Apa itu merge conflict?', options: ['Error saat install Git', 'Situasi ketika Git tidak bisa otomatis menggabungkan dua perubahan yang bertabrakan', 'Jenis branch khusus', 'Command Git'], answerIndex: 1, explanation: 'Merge conflict terjadi ketika Git tidak bisa otomatis menggabungkan dua perubahan yang bertabrakan pada baris yang sama.' }
  ]
};

export const cssPlayground = {
  topics: [
    { key: 'warna', label: 'Warna', explanation: 'Warna diatur lewat property color (teks) dan background (latar). opacity mengatur transparansi keseluruhan elemen, dari 0 (tak terlihat) sampai 1 (penuh).', initialHtml: '<div class="box">Ubah warnaku</div>', initialCss: '.box {\n  padding: 24px;\n  background: #3a4729;\n  color: white;\n  opacity: 1;\n  font-family: sans-serif;\n  border-radius: 8px;\n}' },
    { key: 'text', label: 'Text', explanation: 'font-family menentukan jenis huruf, font-size ukurannya, font-weight ketebalannya, line-height jarak antar baris, dan text-align perataan teks.', initialHtml: '<p class="txt">Ubah gaya teks ini — coba ganti ukuran, ketebalan, dan jarak antar barisnya.</p>', initialCss: '.txt {\n  font-family: sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.6;\n  text-align: left;\n  letter-spacing: 0px;\n}' },
    { key: 'box-model', label: 'Box Model', explanation: 'Setiap elemen adalah kotak: margin (jarak luar), border (garis tepi), padding (jarak dalam), lalu content (isi). Urutannya dari luar ke dalam: margin → border → padding → content.', initialHtml: '<div class="box">Box Model</div>', initialCss: '.box {\n  width: 200px;\n  margin: 20px;\n  border: 4px solid #3a4729;\n  padding: 16px;\n  background: #eef1e7;\n  border-radius: 8px;\n}' },
    { key: 'layout', label: 'Layout', explanation: 'display mengatur bagaimana elemen ditampilkan (block, inline, flex, grid). position mengatur di mana elemen ditempatkan (relative, absolute, fixed). z-index mengatur urutan tumpuk saat elemen bertumpukan.', initialHtml: '<div class="wrap"><div class="tag">Badge</div></div>', initialCss: '.wrap {\n  position: relative;\n  height: 120px;\n  background: #eef1e7;\n}\n.tag {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 10;\n  background: #ffcc01;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-family: sans-serif;\n}' },
    { key: 'flexbox', label: 'Flexbox', explanation: 'display: flex diaktifkan di kontainer (elemen induk). justify-content mengatur susunan horizontal, align-items mengatur susunan vertikal, dan flex-wrap membuat item membungkus ke baris baru kalau tidak cukup tempat.', initialHtml: '<div class="row"><div class="item">1</div><div class="item">2</div><div class="item">3</div></div>', initialCss: '.row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  background: #eef1e7;\n  padding: 16px;\n}\n.item {\n  background: #3a4729;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 6px;\n  font-family: sans-serif;\n}' },
    { key: 'grid', label: 'Grid', explanation: 'display: grid menyusun elemen dalam baris DAN kolom sekaligus. grid-template-columns menentukan jumlah dan ukuran kolom, grid-template-rows untuk baris, dan gap mengatur jarak antar sel.', initialHtml: '<div class="g"><div class="c">A</div><div class="c">B</div><div class="c">C</div><div class="c">D</div></div>', initialCss: '.g {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.c {\n  background: #3a4729;\n  color: white;\n  padding: 20px;\n  text-align: center;\n  border-radius: 6px;\n  font-family: sans-serif;\n}' },
    { key: 'responsive', label: 'Responsive Design', explanation: '@media query menerapkan CSS hanya saat kondisi tertentu terpenuhi, misalnya lebar layar di bawah nilai tertentu. Ini fondasi dari desain yang menyesuaikan diri ke ukuran layar apa pun.', initialHtml: '<div class="box">Resize preview-nya (perkecil browser) untuk melihat perubahan warna</div>', initialCss: '.box {\n  padding: 24px;\n  background: #3a4729;\n  color: white;\n  font-family: sans-serif;\n  border-radius: 8px;\n}\n@media (max-width: 480px) {\n  .box { background: #8a6d00; }\n}' },
    { key: 'animation', label: 'Animation', explanation: 'transition membuat perubahan (misalnya saat hover) terjadi secara halus. animation dengan @keyframes menjalankan animasi yang lebih kompleks dan bisa berulang otomatis.', initialHtml: '<div class="box">Hover aku!</div>', initialCss: '.box {\n  padding: 24px;\n  background: #3a4729;\n  color: white;\n  font-family: sans-serif;\n  border-radius: 8px;\n  transition: transform 0.3s, background 0.3s;\n}\n.box:hover {\n  transform: scale(1.08);\n  background: #8a6d00;\n}' }
  ],
  cheatSheet: [
    { property: 'color', fungsi: 'Warna teks', contoh: 'color: red;', category: 'Warna & Background' },
    { property: 'background', fungsi: 'Latar belakang (warna/gradasi/gambar)', contoh: 'background: #3a4729;', category: 'Warna & Background' },
    { property: 'background-color', fungsi: 'Warna latar belakang', contoh: 'background-color: #101622;', category: 'Warna & Background' },
    { property: 'opacity', fungsi: 'Transparansi elemen (0–1)', contoh: 'opacity: 0.8;', category: 'Warna & Background' },
    { property: 'font-family', fungsi: 'Jenis huruf', contoh: 'font-family: Arial, sans-serif;', category: 'Teks & Font' },
    { property: 'font-size', fungsi: 'Ukuran teks', contoh: 'font-size: 16px;', category: 'Teks & Font' },
    { property: 'font-weight', fungsi: 'Ketebalan teks (400/700)', contoh: 'font-weight: bold;', category: 'Teks & Font' },
    { property: 'text-align', fungsi: 'Perataan teks', contoh: 'text-align: center;', category: 'Teks & Font' },
    { property: 'line-height', fungsi: 'Jarak antar baris', contoh: 'line-height: 1.6;', category: 'Teks & Font' },
    { property: 'letter-spacing', fungsi: 'Jarak antar huruf', contoh: 'letter-spacing: 1px;', category: 'Teks & Font' },
    { property: 'text-decoration', fungsi: 'Garis pada teks', contoh: 'text-decoration: underline;', category: 'Teks & Font' },
    { property: 'width', fungsi: 'Lebar elemen', contoh: 'width: 300px;', category: 'Box Model' },
    { property: 'height', fungsi: 'Tinggi elemen', contoh: 'height: 200px;', category: 'Box Model' },
    { property: 'margin', fungsi: 'Jarak luar elemen', contoh: 'margin: 16px;', category: 'Box Model' },
    { property: 'padding', fungsi: 'Jarak dalam elemen', contoh: 'padding: 12px 24px;', category: 'Box Model' },
    { property: 'border', fungsi: 'Garis tepi elemen', contoh: 'border: 1px solid #fff;', category: 'Box Model' },
    { property: 'border-radius', fungsi: 'Sudut membulat', contoh: 'border-radius: 12px;', category: 'Box Model' },
    { property: 'box-shadow', fungsi: 'Bayangan elemen', contoh: 'box-shadow: 0 4px 12px rgba(0,0,0,.3);', category: 'Box Model' },
    { property: 'display', fungsi: 'Mengatur tampilan elemen', contoh: 'display: flex;', category: 'Layout' },
    { property: 'position', fungsi: 'Posisi elemen', contoh: 'position: absolute;', category: 'Layout' },
    { property: 'z-index', fungsi: 'Urutan tumpukan', contoh: 'z-index: 10;', category: 'Layout' },
    { property: 'overflow', fungsi: 'Perilaku isi yang meluber', contoh: 'overflow: hidden;', category: 'Layout' },
    { property: 'flex-direction', fungsi: 'Arah susunan item', contoh: 'flex-direction: row;', category: 'Flexbox' },
    { property: 'justify-content', fungsi: 'Susunan horizontal item', contoh: 'justify-content: space-between;', category: 'Flexbox' },
    { property: 'align-items', fungsi: 'Posisi vertikal item', contoh: 'align-items: center;', category: 'Flexbox' },
    { property: 'flex-wrap', fungsi: 'Item membungkus ke baris baru', contoh: 'flex-wrap: wrap;', category: 'Flexbox' },
    { property: 'gap', fungsi: 'Jarak antar item flex/grid', contoh: 'gap: 16px;', category: 'Flexbox' },
    { property: 'grid-template-columns', fungsi: 'Jumlah & ukuran kolom', contoh: 'grid-template-columns: repeat(3, 1fr);', category: 'Grid' },
    { property: 'grid-template-rows', fungsi: 'Jumlah & ukuran baris', contoh: 'grid-template-rows: 100px 1fr;', category: 'Grid' },
    { property: 'grid-column', fungsi: 'Rentang kolom item', contoh: 'grid-column: span 2;', category: 'Grid' },
    { property: 'transition', fungsi: 'Efek halus saat perubahan', contoh: 'transition: all 0.3s;', category: 'Animasi & Responsive' },
    { property: 'animation', fungsi: 'Menjalankan animasi', contoh: 'animation: bounce 2s infinite;', category: 'Animasi & Responsive' },
    { property: '@media', fungsi: 'CSS berdasarkan ukuran layar', contoh: '@media (max-width: 768px) { ... }', category: 'Animasi & Responsive' },
    { property: 'cursor', fungsi: 'Bentuk kursor saat hover', contoh: 'cursor: pointer;', category: 'Animasi & Responsive' }
  ],
  oneMinute: [
    { term: 'Selector', code: 'p { ... }', meaning: 'Bagian yang memilih elemen mana yang akan di-style.' },
    { term: 'Property', code: 'color', meaning: 'Hal yang ingin diubah, seperti warna, ukuran, atau jarak.' },
    { term: 'Value', code: 'color: red;', meaning: 'Nilai dari property. Di sini: membuat teks berwarna merah.' },
    { term: 'Class', code: '.box { ... }', meaning: 'Titik (.) memilih elemen dengan class="box". Bisa dipakai di banyak elemen sekaligus.' },
    { term: 'ID', code: '#judul { ... }', meaning: 'Pagar (#) memilih elemen dengan id="judul". Hanya untuk satu elemen.' },
    { term: 'Margin', code: 'margin: 20px;', meaning: 'Jarak ke LUAR elemen — menjauhkan elemen lain di sekitarnya.' },
    { term: 'Padding', code: 'padding: 20px;', meaning: 'Jarak ke DALAM — antara isi dan tepi elemen itu sendiri.' },
    { term: 'Border', code: 'border: 1px solid #fff;', meaning: 'Garis tepi elemen: ketebalan, jenis garis, dan warnanya.' },
    { term: 'Flexbox', code: 'display: flex;', meaning: 'Menyusun elemen dalam satu baris/kolom. Diaktifkan di kontainer (induk).' },
    { term: 'Grid', code: 'display: grid;', meaning: 'Menyusun elemen dalam baris DAN kolom sekaligus.' },
    { term: 'Transition', code: 'transition: all 0.3s;', meaning: 'Membuat perubahan (misalnya saat hover) berjalan halus, bukan langsung berpindah.' },
    { term: '@media', code: '@media (max-width: 768px)', meaning: 'Menerapkan CSS hanya pada ukuran layar tertentu — dasar dari responsive design.' }
  ]
};

export const htmlPlayground = {
  topics: [
    { key: 'struktur', label: 'Struktur Dokumen', explanation: 'Setiap halaman HTML dimulai dari <!DOCTYPE html>, dibungkus <html>, lalu punya <head> (metadata, tidak tampil) dan <body> (konten yang tampil di browser).', initialHtml: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Halaman Pertama</title>\n</head>\n<body>\n  <p>Ini isi body yang tampil di browser.</p>\n</body>\n</html>', initialCss: '' },
    { key: 'heading-paragraf', label: 'Heading & Paragraf', explanation: 'h1 sampai h6 menandai judul dengan level hierarki (h1 paling penting), sementara <p> menandai satu paragraf teks biasa.', initialHtml: '<h1>Judul Utama</h1>\n<h2>Sub Judul</h2>\n<p>Ini adalah paragraf biasa untuk isi konten.</p>', initialCss: 'h1 { color: #3a4729; }\nh2 { color: #8a6d00; }' },
    { key: 'teks-inline', label: 'Teks Inline', explanation: '<a> membuat link, <strong> menebalkan teks penting, <em> memiringkan teks untuk penekanan, <span> mengelompokkan teks tanpa makna khusus, dan <br> membuat baris baru.', initialHtml: '<p>Teks <strong>tebal</strong>, teks <em>miring</em>, dan <a href="#">sebuah link</a>.<br>Baris baru di sini.</p>', initialCss: 'a { color: #3a4729; }' },
    { key: 'gambar', label: 'Gambar', explanation: '<img> menampilkan gambar lewat atribut src, dengan alt sebagai teks alternatif. <figure> dan <figcaption> membungkus gambar beserta keterangannya.', initialHtml: '<figure>\n  <img src="https://placehold.co/200x120" alt="Contoh gambar placeholder">\n  <figcaption>Keterangan gambar di sini.</figcaption>\n</figure>', initialCss: 'figcaption { font-size: 12px; color: #666; }' },
    { key: 'link-navigasi', label: 'Link & Navigasi', explanation: '<a href="..."> membuat tautan ke halaman lain atau bagian lain di halaman yang sama. <nav> membungkus sekumpulan link navigasi utama.', initialHtml: '<nav>\n  <a href="#">Beranda</a>\n  <a href="#">Tentang</a>\n  <a href="#">Kontak</a>\n</nav>', initialCss: 'nav a { margin-right: 12px; color: #3a4729; }' },
    { key: 'list', label: 'List', explanation: '<ul> membuat daftar tak berurutan (bullet), <ol> membuat daftar berurutan (angka), dan <li> menandai tiap item di dalamnya.', initialHtml: '<ul>\n  <li>Item pertama</li>\n  <li>Item kedua</li>\n</ul>\n<ol>\n  <li>Langkah satu</li>\n  <li>Langkah dua</li>\n</ol>', initialCss: '' },
    { key: 'tabel', label: 'Tabel', explanation: '<table> membungkus seluruh tabel, <tr> menandai satu baris, <th> menandai sel header, dan <td> menandai sel data biasa.', initialHtml: '<table>\n  <tr><th>Nama</th><th>Skor</th></tr>\n  <tr><td>Jo</td><td>90</td></tr>\n</table>', initialCss: 'table, th, td { border: 1px solid #ccc; padding: 6px; }' },
    { key: 'form-dasar', label: 'Form Dasar', explanation: '<form> membungkus seluruh elemen input. <label> memberi nama pada input, dan <input> menerima data dari pengguna (teks, email, dst tergantung atribut type).', initialHtml: '<form>\n  <label>Nama: <input type="text"></label><br>\n  <label>Email: <input type="email"></label>\n</form>', initialCss: 'input { margin: 4px 0; }' },
    { key: 'form-lanjutan', label: 'Form Lanjutan', explanation: '<select> membuat dropdown pilihan, <textarea> untuk teks panjang, <button> untuk aksi, dan input type checkbox/radio untuk pilihan tunggal/ganda.', initialHtml: '<select>\n  <option>Pilihan A</option>\n  <option>Pilihan B</option>\n</select>\n<br><textarea placeholder="Tulis pesan..."></textarea>\n<br><button>Kirim</button>', initialCss: 'textarea { display: block; margin: 8px 0; }' },
    { key: 'div-span', label: 'Div & Span', explanation: '<div> adalah kontainer generik untuk blok (biasanya mengambil satu baris penuh), sementara <span> adalah kontainer generik untuk teks inline (tidak memutus baris).', initialHtml: '<div class="kotak">Ini div (block)</div>\n<p>Ini <span class="sorot">span di dalam paragraf</span>.</p>', initialCss: '.kotak { background: #eef1e7; padding: 8px; }\n.sorot { background: #ffcc01; }' },
    { key: 'semantic', label: 'Semantic HTML', explanation: '<header>, <main>, <section>, <article>, dan <footer> memberi makna struktural pada halaman, membantu browser dan screen reader memahami peran tiap bagian — bukan cuma <div> generik.', initialHtml: '<header>Header Halaman</header>\n<main>\n  <article>Ini satu artikel.</article>\n</main>\n<footer>Footer Halaman</footer>', initialCss: 'header, footer { background: #eef1e7; padding: 8px; }' },
    { key: 'atribut', label: 'Atribut Umum', explanation: 'class dan id menandai elemen untuk di-styling/dipilih, style menambah CSS langsung di elemen, title menampilkan tooltip, dan data-* menyimpan data custom untuk dipakai JavaScript.', initialHtml: '<p id="unik" class="info" title="Ini tooltip" data-level="1">Arahkan kursor untuk lihat tooltip.</p>', initialCss: '.info { color: #3a4729; font-weight: bold; }' },
    { key: 'multimedia', label: 'Multimedia', explanation: '<video> dan <audio> memutar file media langsung di halaman, dengan atribut controls untuk menampilkan kontrol play/pause bawaan browser.', initialHtml: '<video controls width="250">\n  <source src="video.mp4" type="video/mp4">\n  Browser tidak mendukung video.\n</video>', initialCss: '' },
    { key: 'embedding', label: 'Embedding & iframe', explanation: '<iframe> menyisipkan halaman/konten lain (seperti video YouTube atau peta) di dalam halamanmu, dengan ukurannya diatur lewat width dan height.', initialHtml: '<iframe src="about:blank" width="250" height="120" title="Contoh iframe"></iframe>', initialCss: 'iframe { border: 1px solid #ccc; }' },
    { key: 'aksesibilitas', label: 'Aksesibilitas di HTML', explanation: 'alt pada gambar menjelaskan isi gambar untuk screen reader, aria-label memberi nama pada elemen tanpa teks visual, dan label for menghubungkan label ke input secara resmi.', initialHtml: '<label for="nm">Nama</label>\n<input id="nm" type="text" aria-label="Nama lengkap">\n<img src="https://placehold.co/60" alt="Ikon profil pengguna">', initialCss: '' }
  ],
  cheatSheet: [
    { property: '<html>', fungsi: 'Elemen pembungkus seluruh dokumen', contoh: '<html>...</html>', category: 'Struktur' },
    { property: '<head>', fungsi: 'Metadata halaman, tidak tampil langsung', contoh: '<head>...</head>', category: 'Struktur' },
    { property: '<body>', fungsi: 'Seluruh konten yang tampil di browser', contoh: '<body>...</body>', category: 'Struktur' },
    { property: '<title>', fungsi: 'Judul tab browser', contoh: '<title>Judul Halaman</title>', category: 'Struktur' },
    { property: '<meta>', fungsi: 'Metadata tambahan (charset, viewport, dll)', contoh: '<meta charset="utf-8">', category: 'Struktur' },
    { property: '<h1>-<h6>', fungsi: 'Judul dengan tingkat hierarki', contoh: '<h1>Judul</h1>', category: 'Teks' },
    { property: '<p>', fungsi: 'Satu paragraf teks', contoh: '<p>Teks di sini.</p>', category: 'Teks' },
    { property: '<strong>', fungsi: 'Teks tebal, menandakan penting', contoh: '<strong>Penting</strong>', category: 'Teks' },
    { property: '<em>', fungsi: 'Teks miring, menandakan penekanan', contoh: '<em>Tekankan ini</em>', category: 'Teks' },
    { property: '<br>', fungsi: 'Baris baru di dalam teks', contoh: 'Baris satu<br>Baris dua', category: 'Teks' },
    { property: '<span>', fungsi: 'Kontainer generik untuk teks inline', contoh: '<span>teks</span>', category: 'Teks' },
    { property: '<div>', fungsi: 'Kontainer generik untuk blok', contoh: '<div>...</div>', category: 'Layout' },
    { property: '<a href="">', fungsi: 'Membuat tautan/link', contoh: '<a href="/">Beranda</a>', category: 'Navigasi' },
    { property: '<nav>', fungsi: 'Membungkus link navigasi utama', contoh: '<nav>...</nav>', category: 'Navigasi' },
    { property: '<img>', fungsi: 'Menampilkan gambar', contoh: '<img src="foto.jpg" alt="...">', category: 'Media' },
    { property: '<video>', fungsi: 'Memutar video', contoh: '<video controls src="v.mp4"></video>', category: 'Media' },
    { property: '<audio>', fungsi: 'Memutar audio', contoh: '<audio controls src="a.mp3"></audio>', category: 'Media' },
    { property: '<ul>/<ol>', fungsi: 'Daftar tak berurutan/berurutan', contoh: '<ul><li>Item</li></ul>', category: 'List & Tabel' },
    { property: '<li>', fungsi: 'Satu item dalam daftar', contoh: '<li>Item</li>', category: 'List & Tabel' },
    { property: '<table>', fungsi: 'Membungkus seluruh tabel', contoh: '<table>...</table>', category: 'List & Tabel' },
    { property: '<tr>/<td>/<th>', fungsi: 'Baris, sel data, sel header tabel', contoh: '<tr><td>Isi</td></tr>', category: 'List & Tabel' },
    { property: '<form>', fungsi: 'Membungkus elemen input', contoh: '<form>...</form>', category: 'Form' },
    { property: '<input>', fungsi: 'Menerima input dari pengguna', contoh: '<input type="text">', category: 'Form' },
    { property: '<label>', fungsi: 'Nama/keterangan untuk input', contoh: '<label for="x">Nama</label>', category: 'Form' },
    { property: '<select>', fungsi: 'Dropdown pilihan', contoh: '<select><option>A</option></select>', category: 'Form' },
    { property: '<textarea>', fungsi: 'Input teks panjang multi-baris', contoh: '<textarea></textarea>', category: 'Form' },
    { property: '<button>', fungsi: 'Tombol aksi', contoh: '<button>Kirim</button>', category: 'Form' },
    { property: '<header>', fungsi: 'Bagian header halaman/bagian', contoh: '<header>...</header>', category: 'Semantic' },
    { property: '<main>', fungsi: 'Konten utama halaman', contoh: '<main>...</main>', category: 'Semantic' },
    { property: '<section>', fungsi: 'Bagian tematik dalam halaman', contoh: '<section>...</section>', category: 'Semantic' },
    { property: '<article>', fungsi: 'Konten mandiri (artikel, post)', contoh: '<article>...</article>', category: 'Semantic' },
    { property: '<footer>', fungsi: 'Bagian footer halaman/bagian', contoh: '<footer>...</footer>', category: 'Semantic' }
  ],
  oneMinute: [
    { term: 'Tag', code: '<p>...</p>', meaning: 'Penanda pembuka dan penutup yang membentuk sebuah elemen HTML.' },
    { term: 'Element', code: '<p>Teks</p>', meaning: 'Tag pembuka, isi, dan tag penutup secara keseluruhan.' },
    { term: 'Attribute', code: 'href="/"', meaning: 'Informasi tambahan pada sebuah tag, ditulis di dalam tag pembuka.' },
    { term: 'Void Element', code: '<img>, <br>', meaning: 'Elemen yang tidak punya tag penutup karena tidak membungkus isi apa pun.' },
    { term: 'Nesting', code: '<div><p>...</p></div>', meaning: 'Menempatkan satu elemen di dalam elemen lain, membentuk struktur pohon.' },
    { term: 'Semantic HTML', code: '<article>, <nav>', meaning: 'Tag yang menjelaskan makna/peran kontennya, bukan cuma tampilan.' },
    { term: 'id vs class', code: 'id="x" class="y"', meaning: 'id untuk satu elemen unik, class untuk banyak elemen sejenis.' },
    { term: 'href', code: 'href="https://..."', meaning: 'Atribut pada <a> yang menentukan tujuan link.' },
    { term: 'src', code: 'src="foto.jpg"', meaning: 'Atribut yang menentukan sumber file, dipakai di <img>, <video>, <script>.' },
    { term: 'alt', code: 'alt="Deskripsi gambar"', meaning: 'Teks alternatif gambar, penting untuk aksesibilitas dan SEO.' },
    { term: 'Block vs Inline', code: 'div vs span', meaning: 'Block mengambil satu baris penuh, inline hanya mengambil ruang seluas isinya.' },
    { term: 'Comment', code: '<!-- catatan -->', meaning: 'Catatan di kode yang tidak ditampilkan browser ke pengguna.' },
    { term: 'Boilerplate', code: '<!DOCTYPE html>...', meaning: 'Struktur dasar minimal yang harus ada di setiap file HTML.' },
    { term: 'Form', code: '<form>...</form>', meaning: 'Elemen yang mengumpulkan input pengguna untuk dikirim ke server.' },
    { term: 'ARIA', code: 'aria-label="..."', meaning: 'Atribut tambahan yang membantu screen reader memahami elemen non-standar.' }
  ]
};

export const jsPlayground = {
  topics: [
    { key: 'variabel', label: 'Variabel', explanation: 'let dan const mendeklarasikan variabel; let bisa diubah lagi nilainya, const tidak bisa diubah setelah diisi. var juga ada tapi sudah jarang dipakai di kode modern.', initialCode: 'let nama = "Jo";\nconst umur = 20;\nconsole.log(nama, umur);' },
    { key: 'tipe-data', label: 'Tipe Data', explanation: 'JavaScript punya beberapa tipe data dasar: string (teks), number (angka), boolean (true/false), null (kosong secara sengaja), dan undefined (belum diisi).', initialCode: 'let a = "teks";\nlet b = 10;\nlet c = true;\nlet d = null;\nlet e;\nconsole.log(typeof a, typeof b, typeof c, typeof d, typeof e);' },
    { key: 'operator', label: 'Operator', explanation: 'Operator aritmatika (+, -, *, /) menghitung angka, operator perbandingan (>, <, ===) menghasilkan true/false, dan operator logika (&&, ||) menggabungkan beberapa kondisi.', initialCode: 'console.log(5 + 3);\nconsole.log(10 > 5);\nconsole.log(true && false);' },
    { key: 'kondisi', label: 'Kondisi', explanation: 'if/else menjalankan blok kode berbeda tergantung kondisi benar atau salah. switch adalah alternatif kalau kondisinya banyak nilai spesifik.', initialCode: 'let nilai = 75;\nif (nilai >= 80) {\n  console.log("A");\n} else if (nilai >= 60) {\n  console.log("B");\n} else {\n  console.log("C");\n}' },
    { key: 'perulangan', label: 'Perulangan', explanation: 'for menjalankan blok kode berulang sebanyak jumlah yang ditentukan, sementara while berulang selama kondisinya masih benar.', initialCode: 'for (let i = 1; i <= 5; i++) {\n  console.log("Angka " + i);\n}' },
    { key: 'fungsi', label: 'Fungsi', explanation: 'function mengelompokkan kode yang bisa dipanggil ulang dengan input (parameter) berbeda-beda, dan bisa mengembalikan hasil lewat return.', initialCode: 'function sapa(nama) {\n  return "Halo, " + nama + "!";\n}\nconsole.log(sapa("Jo"));' },
    { key: 'arrow-function', label: 'Arrow Function', explanation: 'Arrow function adalah cara singkat menulis function, sering dipakai untuk fungsi pendek satu baris.', initialCode: 'const tambah = (a, b) => a + b;\nconsole.log(tambah(3, 4));' },
    { key: 'array-dasar', label: 'Array Dasar', explanation: 'Array menyimpan banyak nilai dalam satu variabel, diakses lewat index yang dimulai dari 0.', initialCode: 'let buah = ["apel", "jeruk", "mangga"];\nconsole.log(buah[0]);\nconsole.log(buah.length);' },
    { key: 'array-methods', label: 'Array Methods', explanation: 'map mengubah tiap item jadi nilai baru, filter menyaring item sesuai kondisi, dan reduce menggabungkan semua item jadi satu nilai.', initialCode: 'let angka = [1, 2, 3, 4];\nlet genap = angka.filter(n => n % 2 === 0);\nlet dobel = angka.map(n => n * 2);\nconsole.log(genap);\nconsole.log(dobel);' },
    { key: 'object', label: 'Object', explanation: 'Object menyimpan data sebagai pasangan key-value, diakses lewat titik (user.nama) atau kurung siku (user["nama"]).', initialCode: 'let user = { nama: "Jo", umur: 20 };\nconsole.log(user.nama);\nconsole.log(user["umur"]);' },
    { key: 'destructuring', label: 'Destructuring', explanation: 'Destructuring mengambil beberapa nilai dari object/array sekaligus ke variabel terpisah, tanpa menulis user.nama berulang-ulang.', initialCode: 'let user = { nama: "Jo", umur: 20 };\nconst { nama, umur } = user;\nconsole.log(nama, umur);' },
    { key: 'template-literal', label: 'Template Literal', explanation: 'Template literal (memakai backtick) memudahkan menggabungkan teks dan variabel tanpa banyak tanda plus.', initialCode: 'let nama = "Jo";\nlet umur = 20;\nconsole.log(\`Halo, \${nama}! Umurmu \${umur} tahun.\`);' },
    { key: 'scope-closure', label: 'Scope & Closure', explanation: 'Scope menentukan di mana sebuah variabel bisa diakses. Closure adalah fungsi yang tetap mengingat variabel dari fungsi luar meskipun fungsi luar sudah selesai jalan.', initialCode: 'function counter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst next = counter();\nconsole.log(next());\nconsole.log(next());' },
    { key: 'this-keyword', label: 'this Keyword', explanation: 'this merujuk ke object yang sedang memiliki fungsi itu saat dipanggil — nilainya bisa berubah tergantung cara fungsi dipanggil.', initialCode: 'const obj = {\n  nama: "Jo",\n  sapa() {\n    console.log("Halo " + this.nama);\n  }\n};\nobj.sapa();' },
    { key: 'dom-selection', label: 'DOM Selection', explanation: 'querySelector mencari satu elemen di halaman berdasarkan selector CSS (id, class, atau tag), lalu mengembalikan elemen itu untuk dimanipulasi.', initialCode: 'const btn = document.querySelector("#btn");\nconsole.log(btn.textContent);' },
    { key: 'dom-manipulation', label: 'DOM Manipulation', explanation: 'Setelah elemen dipilih, propertinya (textContent, style) bisa diubah langsung lewat JavaScript untuk mengubah tampilan halaman secara dinamis.', initialCode: 'document.querySelector("#txt").textContent = "Teks berubah!";\ndocument.querySelector("#txt").style.color = "green";' },
    { key: 'event-handling', label: 'Event Handling', explanation: 'addEventListener mendengarkan interaksi pengguna (klik, ketik, dll) dan menjalankan fungsi tertentu sebagai respons — klik tombol di preview untuk mencoba.', initialCode: 'document.querySelector("#btn").addEventListener("click", () => {\n  console.log("Tombol diklik!");\n});' },
    { key: 'error-handling', label: 'Error Handling', explanation: 'try/catch menjalankan kode yang berpotensi error, dan menangkap errornya di blok catch supaya program tidak langsung berhenti total.', initialCode: 'try {\n  JSON.parse("{tidak valid}");\n} catch (e) {\n  console.log("Terjadi error: " + e.message);\n}' },
    { key: 'promise-fetch', label: 'Promise & Fetch', explanation: 'Promise mewakili operasi yang butuh waktu (seperti mengambil data dari server) dan akan selesai di masa depan — resolve untuk sukses, reject untuk gagal.', initialCode: 'const cekData = new Promise((resolve) => {\n  setTimeout(() => resolve("Data siap!"), 500);\n});\ncekData.then(hasil => console.log(hasil));' },
    { key: 'async-await', label: 'Async/Await', explanation: 'async/await adalah cara menulis kode Promise supaya terasa seperti kode biasa yang berurutan, lebih mudah dibaca dibanding .then() berantai.', initialCode: 'function ambilData() {\n  return new Promise(resolve => setTimeout(() => resolve("Selesai!"), 500));\n}\nasync function main() {\n  const hasil = await ambilData();\n  console.log(hasil);\n}\nmain();' }
  ],
  cheatSheet: [
    { property: 'let / const', fungsi: 'Mendeklarasikan variabel (bisa/tidak bisa diubah)', contoh: 'let x = 1; const y = 2;', category: 'Dasar' },
    { property: 'typeof', fungsi: 'Mengecek tipe data sebuah nilai', contoh: 'typeof "teks"', category: 'Dasar' },
    { property: '===', fungsi: 'Perbandingan sama persis (nilai & tipe)', contoh: '5 === "5" // false', category: 'Dasar' },
    { property: 'if / else', fungsi: 'Menjalankan kode sesuai kondisi', contoh: 'if (x > 0) { ... }', category: 'Dasar' },
    { property: 'for', fungsi: 'Perulangan dengan jumlah tertentu', contoh: 'for (let i=0;i<5;i++) {}', category: 'Dasar' },
    { property: 'function', fungsi: 'Mendeklarasikan fungsi', contoh: 'function f(x) { return x; }', category: 'Fungsi' },
    { property: '=>', fungsi: 'Arrow function, fungsi singkat', contoh: 'const f = x => x * 2;', category: 'Fungsi' },
    { property: 'return', fungsi: 'Mengembalikan nilai dari fungsi', contoh: 'return hasil;', category: 'Fungsi' },
    { property: '[]', fungsi: 'Membuat array', contoh: 'let arr = [1, 2, 3];', category: 'Array & Object' },
    { property: '{}', fungsi: 'Membuat object', contoh: 'let obj = { a: 1 };', category: 'Array & Object' },
    { property: '.map()', fungsi: 'Mengubah tiap item array', contoh: 'arr.map(x => x * 2)', category: 'Array & Object' },
    { property: '.filter()', fungsi: 'Menyaring item sesuai kondisi', contoh: 'arr.filter(x => x > 0)', category: 'Array & Object' },
    { property: '.reduce()', fungsi: 'Menggabungkan array jadi satu nilai', contoh: 'arr.reduce((a,b) => a+b)', category: 'Array & Object' },
    { property: '...', fungsi: 'Spread, membongkar array/object', contoh: 'let b = [...a, 4];', category: 'Array & Object' },
    { property: '{ a, b }', fungsi: 'Destructuring, ambil beberapa nilai sekaligus', contoh: 'const { a, b } = obj;', category: 'Array & Object' },
    { property: 'Template Literal', fungsi: 'Gabung teks & variabel', contoh: 'Halo ${nama}, memakai backtick', category: 'Array & Object' },
    { property: 'querySelector', fungsi: 'Mencari satu elemen di halaman', contoh: "document.querySelector('#id')", category: 'DOM & Event' },
    { property: 'addEventListener', fungsi: 'Mendengarkan interaksi pengguna', contoh: "el.addEventListener('click', fn)", category: 'DOM & Event' },
    { property: 'textContent', fungsi: 'Membaca/mengubah teks elemen', contoh: "el.textContent = 'Baru'", category: 'DOM & Event' },
    { property: 'JSON.stringify/parse', fungsi: 'Mengubah object ke teks JSON dan sebaliknya', contoh: 'JSON.stringify(obj)', category: 'DOM & Event' },
    { property: 'try / catch', fungsi: 'Menangani error tanpa program berhenti', contoh: 'try { ... } catch(e) {}', category: 'Async' },
    { property: 'Promise', fungsi: 'Mewakili operasi yang butuh waktu', contoh: 'new Promise((resolve) => {})', category: 'Async' },
    { property: 'async / await', fungsi: 'Menulis kode asynchronous secara berurutan', contoh: 'const x = await fetch(url);', category: 'Async' },
    { property: 'console.log', fungsi: 'Menampilkan nilai ke console', contoh: 'console.log(x);', category: 'Async' }
  ],
  oneMinute: [
    { term: 'Variable', code: 'let x = 1;', meaning: 'Tempat menyimpan nilai yang bisa dipakai dan diubah lagi nanti.' },
    { term: 'Function', code: 'function f() {}', meaning: 'Kumpulan kode yang bisa dipanggil ulang dengan input berbeda-beda.' },
    { term: 'Array', code: '[1, 2, 3]', meaning: 'Kumpulan nilai berurutan, diakses lewat index mulai dari 0.' },
    { term: 'Object', code: '{ key: value }', meaning: 'Kumpulan data berpasangan key-value, diakses lewat nama key-nya.' },
    { term: 'Loop', code: 'for (...) {}', meaning: 'Menjalankan kode yang sama berulang kali tanpa menulis ulang.' },
    { term: 'Condition', code: 'if (x) {}', meaning: 'Menjalankan kode tertentu hanya kalau kondisinya benar.' },
    { term: 'Scope', code: '{ let x = 1; }', meaning: 'Area di mana sebuah variabel bisa diakses dan dikenali.' },
    { term: 'Closure', code: 'return function() {}', meaning: 'Fungsi yang tetap mengingat variabel dari fungsi luar setelah selesai jalan.' },
    { term: 'Callback', code: 'arr.forEach(fn)', meaning: 'Fungsi yang diberikan sebagai argumen untuk dipanggil nanti oleh fungsi lain.' },
    { term: 'Promise', code: 'new Promise(...)', meaning: 'Objek yang mewakili hasil operasi yang belum selesai, akan resolve atau reject.' },
    { term: 'Async/Await', code: 'await fetch(url)', meaning: 'Cara menulis kode Promise agar terasa berurutan seperti kode biasa.' },
    { term: 'Event Listener', code: "addEventListener('click', fn)", meaning: 'Mendengarkan interaksi pengguna dan menjalankan fungsi sebagai respons.' },
    { term: 'DOM', code: 'document.querySelector', meaning: 'Representasi halaman HTML sebagai objek yang bisa dibaca/diubah JavaScript.' },
    { term: 'JSON', code: '{\"a\":1}', meaning: 'Format teks untuk menyimpan/mengirim data terstruktur antar sistem.' },
    { term: 'Template Literal', code: 'Halo ${nama}', meaning: 'Cara menggabungkan teks dan variabel memakai backtick, bukan tanda plus.' },
    { term: 'Destructuring', code: 'const {a,b} = obj;', meaning: 'Mengambil beberapa nilai dari object/array sekaligus ke variabel terpisah.' },
    { term: 'Spread Operator', code: '[...arr, 4]', meaning: 'Membongkar isi array/object, sering dipakai untuk menggabungkan atau menyalin.' },
    { term: 'Arrow Function', code: 'x => x * 2', meaning: 'Cara singkat menulis function, terutama untuk fungsi pendek satu baris.' },
    { term: 'try/catch', code: 'try {} catch(e) {}', meaning: 'Menjalankan kode yang mungkin error tanpa membuat program berhenti total.' },
    { term: 'Hoisting', code: 'console.log(x); var x=1;', meaning: 'Perilaku JavaScript yang "mengangkat" deklarasi variabel/fungsi ke atas sebelum kode jalan.' }
  ]
};
