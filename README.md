# 🚀 Cloud Full-Stack Deployment: Portfolio Landing Page

[![Deployment Status](https://github.com/EvoVincere/portoLandingpage/actions/workflows/deploy.yml/badge.svg)](https://github.com/EvoVincere/portoLandingpage/actions)

Proyek ini adalah implementasi nyata dari alur kerja **DevOps** dan **Cloud Computing**. Fokus utama dari proyek ini bukan hanya pada tampilan frontend, melainkan pada bagaimana aplikasi dikelola, diotomatisasi, dan dipantau di lingkungan produksi (Cloud).

---

## 🔗 Live Links
* **Web Application:** [http://165.22.244.5/](http://165.22.244.5/)
* **Monitoring Dashboard (Netdata):** [http://165.22.244.5:19999/](http://165.22.244.5:19999/)
* **CI/CD Pipeline Status:** [GitHub Actions Tab](https://github.com/EvoVincere/portoLandingpage/actions)

---

## 🛠️ Tech Stack & Infrastructure

### **Frontend**
* **React.js:** Digunakan untuk membangun antarmuka portfolio yang responsif dan performan.
* **Nginx:** Bertindak sebagai *Web Server* dan *Reverse Proxy* untuk melayani file statis hasil build.

### **Cloud & DevOps**
* **DigitalOcean (Droplet):** Infrastruktur VPS berbasis Ubuntu Server.
* **GitHub Actions:** Automasi **CI/CD** untuk proses *Build* dan *Deploy* otomatis.
* **Netdata:** Tool monitoring *real-time* untuk memantau performa server (CPU, RAM, Network).
* **UFW (Uncomplicated Firewall):** Mengatur kebijakan akses keamanan port pada server.

---

## 🔄 CI/CD Workflow
Proyek ini menggunakan pipeline otomatis untuk memastikan setiap perubahan kode di-deploy dengan aman tanpa intervensi manual:

1.  **Trigger:** Developer melakukan `push` kode ke branch `main`.
2.  **Build Stage:** GitHub Actions menjalankan `npm install` dan `npm run build` untuk menghasilkan folder produksi.
3.  **Deploy Stage:** Hasil build dikirim ke DigitalOcean Droplet menggunakan protokol **SSH/SCP** secara otomatis.
4.  **Verification:** Pipeline akan memberikan status sukses (hijau) jika file berhasil diperbarui di folder `/var/www/cloudporto`.

---

## 🔒 Security Measures
Keamanan adalah prioritas dalam deployment ini:
* **Credential Management:** Seluruh data sensitif (IP Server, Username, SSH Private Key) dikelola melalui **GitHub Secrets**. Tidak ada kredensial yang tertulis langsung (*hardcoded*) di dalam source code.
* **SSH Key Authentication:** Akses ke server dibatasi hanya menggunakan *SSH Key-based authentication*.
* **Firewall Configuration:** Hanya port yang diperlukan (80 untuk HTTP, 19999 untuk Netdata, dan 22 untuk SSH) yang dibuka pada firewall server.

---

## 📈 Monitoring & Scaling
* **Monitoring:** Performa sistem dapat dipantau secara langsung melalui dashboard **Netdata**. Log akses dan error juga dicatat secara berkala di `/var/log/nginx/`.
* **Scaling Strategy:** Proyek ini mendukung **Vertical Scaling**. Jika trafik meningkat, spesifikasi Droplet (CPU/RAM) dapat ditingkatkan secara manual melalui panel kontrol DigitalOcean tanpa perlu konfigurasi ulang infrastruktur.
<img width="1918" height="973" alt="image" src="https://github.com/user-attachments/assets/95743323-0691-46a4-acf0-445324bf5a90" />

  

---

## 📄 Documentation Checklist (Capstone Project)
- [x] **CI/CD:** Pipeline otomatis (Build & Deploy) berjalan sukses.
- [x] **Deployment:** Berhasil di-deploy ke layanan Cloud (DigitalOcean VPS).
- [x] **Monitoring:** Dashboard Netdata aktif dan berfungsi.
- [x] **Security:** Secrets tidak hardcoded dan menggunakan SSH Key.
- [x] **Documentation:** File README lengkap dengan detail infrastruktur.

---
**Developed by [Iqbaal Hibatullah](https://github.com/EvoVincere)**
