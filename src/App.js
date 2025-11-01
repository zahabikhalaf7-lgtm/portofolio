import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  // ===== Global States =====
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  // ===== States & Refs untuk Dua Sidebar Detail =====
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const sidebarRef1 = useRef(null);
  const sidebarRef2 = useRef(null);

  // ===== Data untuk sidebar detail 1 =====
const details = {
  Coding:
    "Saya sangat menyukai dunia coding dan saat ini sedang giat belajar untuk meningkatkan kemampuan saya. Coding bagi saya bukan hanya tentang menulis kode, tapi juga tentang menciptakan sesuatu yang bermanfaat, memecahkan masalah, dan menyalurkan kreativitas. Setiap tantangan baru di dunia pemrograman membuat saya semakin termotivasi untuk terus belajar dan berkembang.",
  Desain:
    "Saya memiliki ketertarikan yang besar pada dunia desain, terutama desain poster dan layout. Saya suka menyalurkan kreativitas melalui warna, bentuk, dan komposisi agar karya saya terlihat menarik dan komunikatif. Belajar desain membuat saya mampu mengekspresikan ide dengan visual yang menarik sekaligus profesional.",
  Membuat_Novel:
    "Saya suka menulis novel dan menciptakan cerita yang penuh imajinasi. Membuat karakter dan alur cerita memberi saya kebebasan untuk mengekspresikan ide, emosi, dan dunia yang unik. Menulis novel bukan hanya hobi, tapi juga cara saya mengasah kreativitas dan berpikir kritis dalam merancang cerita yang menarik bagi pembaca.",
  Membaca_Novel:
    "Saya suka membaca novel karena membaca membuka jendela imajinasi dan pengetahuan baru. Setiap cerita yang saya baca membantu saya memahami perspektif berbeda, menambah ide kreatif, dan memberi inspirasi untuk menulis atau menciptakan karya saya sendiri. Membaca novel bagi saya bukan sekadar hiburan, tapi juga sarana belajar dan mengembangkan diri.",
  Pencak_Silat:
    "Saya menyukai pencak silat sebagai olahraga dan seni bela diri. Latihan ini meningkatkan disiplin, kekuatan fisik, dan konsentrasi, sekaligus menanamkan nilai budaya dan filosofi. Pelatih saya juga pernah berkata: Sephiro Gedhening Sengsoro Yen Tinompo Amung Dadi Coba yang berarti sebesar apapun penderitaan, apabila diterima dengan hati yang ikhlas maka hanya akan menjadi cobaan semata.",
  Basket:
    "Saya sangat menyukai basket sebagai olahraga yang menantang dan seru. Bermain basket membantu saya melatih kerja sama tim, strategi, ketangkasan, dan fokus. Selain itu, basket juga menjadi cara saya menyalurkan energi, menjaga kebugaran, dan bersenang-senang sambil mengembangkan kemampuan fisik dan mental.",
};

// ===== Data untuk sidebar detail 2 =====
const details2 = {
  SD:
    "Saya dulu bersekolah di SD Kutoronon 1, Kabupaten Lumajang dari kelas 1 sampai kelas 2. Setelah itu, saya pindah ke Probolinggo mengikuti orang tua dan melanjutkan di SD Tisnonegaran 3 hingga kelas 6. Waktu SD, saya punya banyak kenangan seru—mulai dari bermain di halaman sekolah sampai ikut kegiatan bareng teman-teman baru. Masa itu sederhana, tapi sangat berkesan.",
  SMP:
    "Setelah lulus SD, saya melanjutkan sekolah di SMPN 2 Kota Probolinggo. Waktu itu saya pilih sekolah ini karena ikut-ikut teman, tapi ternyata di sanalah saya dapat banyak pengalaman baru. Saya mulai belajar hal-hal yang lebih sulit, ketemu teman-teman seru, dan mulai ngerti arti kerja sama serta tanggung jawab.",
  SMK:
    "Setelah lulus SMP, saya melanjutkan sekolah di SMKN 1 Probolinggo dan mengambil jurusan RPL (Rekayasa Perangkat Lunak). Saya memilih jurusan ini karena ingin punya masa depan yang lebih baik dan tertarik dengan dunia teknologi.",
};

  // ===== RETURN =====
  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {/* ===== HEADER ===== */}
      <header className="header">
        <h1>Zahabi Khalaf</h1>
        <h3>Selamat Datang Di Portofolio Saya</h3>
      </header>

      {/* ===== MENU ===== */}
      <img
        src="63ada540-8b86-4bd7-b398-2ac4143f5c61_removalai_preview.png"
        alt="menu"
        className="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {menuOpen && (
        <div className="sidebar" ref={sidebarRef}>
          <a href="#profil" onClick={() => setMenuOpen(false)}><h4>Profil</h4></a>
          <a href="#about" onClick={() => setMenuOpen(false)}><h4>Tentang Saya</h4></a>
          <a href="#projects_" onClick={() => setMenuOpen(false)}><h4>Bakat dan Minat</h4></a>
          <a href="#projects" onClick={() => setMenuOpen(false)}><h4>Hobi Saya</h4></a>
          <a href="#quote" onClick={() => setMenuOpen(false)}><h4>Kata Motivasi</h4></a>
          <a href="#kontak" onClick={() => setMenuOpen(false)}><h4>Kontak</h4></a>
        </div>
      )}

      {/* ===== DARK MODE TOGGLE ===== */}
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀" : "☾"}
      </button>

      {/* ===== PROFIL ===== */}
      <section id="profil" className="profil">
        <h2>Profil Saya</h2>
        <img src="fotoku.jpeg" alt="Foto Profil" className="foto-profil" />
        <p>
          Nama saya Zahabi Khalaf, saya siswa kelas 11 RPL 1 yang suka membaca
          dan juga suka menulis novel, selain itu saya juga tertarik pada dunia
          desain dan coding. Karena saya senang menyalurkan ide dan kreativitas
          lewat karya yang bisa bermanfaat bagi orang lain.
        </p>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="about">
        <h2>Tentang Saya</h2>
        <p>
          Saya adalah pelajar yang sangat tertarik dengan dunia pemrograman dan
          desain. Selain itu, saya juga gemar membaca novel dan menulis cerita
          sebagai bentuk ekspresi kreatif. Dunia coding dan desain bagi saya
          adalah cara untuk menciptakan sesuatu yang bermanfaat dan indah.
        </p>
      </section>

      {/* ===== BAKAT & MINAT ===== */}
      <section id="projects_" className="projects_">
        <h2>Bakat dan Minat Saya</h2>
        <div className="bakat-container">
          <ul>
            {Object.keys(details).map((item) => (
              <li key={item} onClick={() => setSelectedItem1(item)}>
                {item}
              </li>
            ))}
          </ul>

          {selectedItem1 && (
            <div className="detail-sidebar" ref={sidebarRef1}>
              <h2>{selectedItem1}</h2>
              <p>{details[selectedItem1]}</p>
              <button onClick={() => setSelectedItem1(null)}>Tutup</button>
            </div>
          )}
        </div>
      </section>

      {/* ===== RIWAYAT PENDIDIKAN ===== */}
      <section id="projects4" className="projects4">
        <h2>Riwayat Pendidikan</h2>
        <div className="bakat-container2">
          <ul>
            {Object.keys(details2).map((item) => (
              <li key={item} onClick={() => setSelectedItem2(item)}>
                {item}
              </li>
            ))}
          </ul>

          {selectedItem2 && (
            <div className="detail-sidebar2" ref={sidebarRef2}>
              <h2>{selectedItem2}</h2>
              <p>{details2[selectedItem2]}</p>
              <button onClick={() => setSelectedItem2(null)}>Tutup</button>
            </div>
          )}
        </div>
      </section>

      {/* ===== HOBI SAYA ===== */}
      <section id="projects" className="projects">
        <h2>Hobi Saya</h2>
        <div className="hobisaya-text">
          <p>
            Saya memiliki beberapa hobi yang menjadi bagian penting dari
            keseharian saya. Saya suka membuat novel, karena melalui menulis
            saya bisa menuangkan ide, imajinasi, dan perasaan ke dalam cerita
            yang hidup.
          </p>
        </div>

        <button
          onClick={() =>
            document.getElementById("projects1").scrollIntoView({ behavior: "smooth" })
          }
        >
          Karya Saya
        </button>
        <button
          onClick={() =>
            document.getElementById("projects2").scrollIntoView({ behavior: "smooth" })
          }
        >
          Novel Favorit Saya
        </button>
        <button
          onClick={() =>
            document.getElementById("projects3").scrollIntoView({ behavior: "smooth" })
          }
        >
          JKT48
        </button>
      </section>

      {/* ===== KARYA SAYA ===== */}
      <section id="projects1" className="projects1">
        <h2>Karya Saya</h2>
        <div className="jkt48-container">
          <img src="karyasaya.jpeg" alt="Karya Saya" className="jkt48" />
          <div className="jkt48-text">
            <p> Ini adalah novel karya saya sendiri yang berjudul “Cahaya di Balik Jendela.” Cerita ini berawal dari
                kisah seorang remaja yang hampir tenggelam dalam kegagalan dan rasa putus asa. Dunia yang ia pandang mulai
                kehilangan warna, hingga kehadiran seorang gadis perlahan mengubah segalanya. Dari sebuah pertemuan sederhana,
                mereka mulai saling mengenal, saling memahami, dan menemukan arti baru dari kehadiran seseorang dalam hidup.
              </p>
               <p>
                Novel ini menggambarkan bagaimana dua jiwa yang terluka dapat saling menyembuhkan. Persahabatan mereka tumbuh
                menjadi sesuatu yang lebih dalam—sebuah kebutuhan untuk saling ada di setiap langkah. Melalui kisah ini, saya ingin
                menyampaikan pesan bahwa di balik setiap jendela yang tertutup, selalu ada cahaya yang menunggu untuk ditemukan;
                kita hanya perlu keberanian untuk membukanya.
                </p>
             </div> 
          </div> 
      </section>

      {/* ===== NOVEL FAVORIT ===== */}
      <section id="projects2" className="projects2">
        <h2>Novel Favorit Saya</h2>
        <div className="jkt48-container">
          <img src="novelfavorit.jpeg" alt="Novel Favorit" className="jkt48" />
          <div className="jkt48-text">
            <p> Ini adalah novel favorit saya yang berjudul “The Secret Relationship.” Ceritanya berpusat pada dua murid SMA, Lea dan Leo,
               yang tiba-tiba harus menikah muda tanpa cinta dan tanpa persiapan apa pun. Mereka bahkan tidak pernah berbicara sebelumnya, 
               namun takdir mempertemukan mereka dalam situasi yang tak terduga—sebuah pernikahan sederhana di ruangan rumah sakit, hanya dengan
               seragam sekolah yang mereka kenakan. Semua terjadi demi kebahagiaan orang tua mereka, meski keluarga besar dari kedua belah pihak
               sama sekali tidak tahu. 
              </p>
               <p> 
                Kisah ini menggabungkan romansa rahasia, konflik batin, dan sentuhan komedi ringan yang membuat hubungan mereka semakin menarik. 
                Di sekolah, mereka berpura-pura tidak saling mengenal, sementara di luar kelas mereka belajar memahami arti dari sebuah ikatan 
                yang tak mereka pilih. Dari momen-momen canggung hingga hangat, The Secret Relationship mengajarkan bahwa cinta bisa tumbuh dari 
                keadaan paling tidak terduga—dan terkadang, rahasia adalah bagian dari perjalanan menuju kedewasaan.
                </p> 
              </div> 
          </div> 
    </section>

      {/* ===== JKT48 ===== */}
      <section id="projects3" className="projects3">
        <h2>JKT48</h2>
        <div className="jkt48-container">
          <img src="ADEL.jpeg" alt="Reva Fidela Adel Pantjoro" className="jkt48" />
          <div className="jkt48-text">
            <p>
              Saya adalah salah satu penggemar JKT48, grup idola asal Indonesia 
              yang selalu memberikan semangat dan inspirasi melalui lagu-lagunya.

            </p>
            <p>
              Dari berbagai member yang berbakat, oshi saya adalah <strong>Reva Fidela Adel Pantjoro.</strong> 
              Melihat perjuangannya membuat saya semakin semangat untuk terus berusaha dalam hal yang saya sukai.
            </p>
            <button
              onClick={() => {
                const audio = document.getElementById("laguJKT48");
                if (audio.paused) {
                  audio.play();
                } else {
                  audio.pause();
                }
              }}
            >
              ♪ Music
            </button>
            <audio
              id="laguJKT48"
              src="/wwd.mp3juice.blog - Lirik JKT48 - Only Today (320 KBps).mp3"
            ></audio>
          </div>
        </div>
      </section>

      {/* ===== QUOTE ===== */}
      <section id="quote" className="quote">
        <h2>Kata Motivasi</h2>
        <blockquote>
          “Jangan Pernah Takut Untuk Mencoba Dengan Alasan Takut Gagal, Karena
          Kegagalan Adalah Awal Dari Kesuksesan”
        </blockquote>
      </section>

      {/* ===== KONTAK ===== */}
      <section id="kontak" className="contact">
        <h2>Kontak</h2>
        <p>Email: <a href="mailto:zahabikhalaf7@gmail.com">zahabikhalaf7@gmail.com</a></p>
        <p>Instagram: <a href="https://www.instagram.com/abiyyzz__">@abiyyzz__</a></p>
        <p>Whatsapp: <a href="https://wasap.at/etgNVI">+62 857-4669-6663</a></p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <p>© 2025 Zahabi Khalaf. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}

export default App;
