import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const details = {
    Coding: "Saya sangat menyukai dunia coding dan saat ini sedang giat belajar untuk meningkatkan kemampuan saya. Coding bagi saya bukan hanya tentang menulis kode, tapi juga tentang menciptakan sesuatu yang bermanfaat, memecahkan masalah, dan menyalurkan kreativitas. Setiap tantangan baru di dunia pemrograman membuat saya semakin termotivasi untuk terus belajar dan berkembang.",
    Desain: "Saya memiliki ketertarikan yang besar pada dunia desain, terutama desain poster dan layout. Saya suka menyalurkan kreativitas melalui warna, bentuk, dan komposisi agar karya saya terlihat menarik dan komunikatif. Belajar desain membuat saya mampu mengekspresikan ide dengan visual yang menarik sekaligus profesional.",
    Membuat_Novel: "Saya suka menulis novel dan menciptakan cerita yang penuh imajinasi. Membuat karakter dan alur cerita memberi saya kebebasan untuk mengekspresikan ide, emosi, dan dunia yang unik. Menulis novel bukan hanya hobi, tapi juga cara saya mengasah kreativitas dan berpikir kritis dalam merancang cerita yang menarik bagi pembaca.",
    Membaca_Novel: "Saya suka membaca novel karena membaca membuka jendela imajinasi dan pengetahuan baru. Setiap cerita yang saya baca membantu saya memahami perspektif berbeda, menambah ide kreatif, dan memberi inspirasi untuk menulis atau menciptakan karya saya sendiri. Membaca novel bagi saya bukan sekadar hiburan, tapi juga sarana belajar dan mengembangkan diri.",
    Pencak_Silat: "Saya menyukai pencak silat sebagai olahraga dan seni bela diri. Latihan pencak silat membantu saya meningkatkan disiplin, kekuatan fisik, dan konsentrasi. Selain itu, saya juga menikmati nilai-nilai budaya dan filosofi yang terkandung di dalamnya, sehingga latihan ini tidak hanya menyehatkan tubuh, tetapi juga membentuk karakter.Pelatih saya juga pernah berkata:Sephiro Gedhening Sengsoro Yen Tinompo Amung Dadi Coba yang berarti sebesar apapun penderitaan, apabila diterima dengan hati yang ikhlas maka hanya akan menjadi cobaan semata.",
    Basket: "Saya sangat menyukai basket sebagai olahraga yang menantang dan seru. Bermain basket membantu saya melatih kerja sama tim, strategi, ketangkasan, dan fokus. Selain itu, basket juga menjadi cara saya menyalurkan energi, menjaga kebugaran, dan bersenang-senang sambil mengembangkan kemampuan fisik dan mental.",
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {/* HEADER */}
      <header className="header">
        <h1>Zahabi Khalaf</h1>
        <h3>Selamat Datang Di Portofolio Saya</h3>
      </header>

      {/* Gambar Menu */}
      <img
        src="63ada540-8b86-4bd7-b398-2ac4143f5c61_removalai_preview.png"
        alt="menu"
        className="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Menu sidebar utama */}
      {menuOpen && (
        <div className="sidebar" ref={sidebarRef}>
          <a href="#profil" onClick={() => setMenuOpen(false)}>
            <h4>Profil</h4>
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            <h4>Tentang Saya</h4>
          </a>
          <a href="#projects_" onClick={() => setMenuOpen(false)}>
            <h4>Bakat dan Minat</h4>
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            <h4>Hobi Saya</h4>
          </a>
          <a href="#quote" onClick={() => setMenuOpen(false)}>
            <h4>Kata Motivasi</h4>
          </a>
          <a href="#kontak" onClick={() => setMenuOpen(false)}>
            <h4>Kontak</h4>
          </a>
        </div>
      )}

      {/* Tombol Mode Gelap */}
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀" : "☾"}
      </button>

      {/* PROFIL */}
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

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>Tentang Saya</h2>
        <p>
          Saya adalah pelajar yang sangat tertarik dengan dunia pemrograman dan
          desain. Selain itu, saya juga gemar membaca novel dan menulis cerita
          sebagai bentuk ekspresi kreatif. Dunia coding dan desain bagi saya
          adalah cara untuk menciptakan sesuatu yang bermanfaat dan indah.
          Melalui keduanya, saya dapat menggabungkan logika dan seni untuk
          menghasilkan karya yang tidak hanya berfungsi dengan baik, tetapi juga
          memiliki nilai estetika. Saya percaya bahwa setiap ide, sekecil apa
          pun, bisa berkembang menjadi sesuatu yang luar biasa jika dikerjakan
          dengan semangat dan kreativitas.
        </p>
      </section>

      {/* BAKAT & MINAT */}
      <section id="projects_" className="projects_">
        <h2>Bakat dan Minat Saya</h2>
        <div className="bakat-container">
          <ul>
            {Object.keys(details).map((item) => (
              <li key={item} onClick={() => setSelectedItem(item)}>
                {item}
              </li>
            ))}
          </ul>

          {selectedItem && (
            <div className="detail-sidebar">
              <h2>{selectedItem}</h2>
              <p>{details[selectedItem]}</p>
              <button onClick={() => setSelectedItem(null)}>Tutup</button>
            </div>
          )}
        </div>
      </section>

      {/* HOBI SAYA */}
      <section id="projects" className="projects">
        <h2>Hobi Saya</h2>
        <div className="hobisaya-text">
          <p>
            Saya memiliki beberapa hobi yang menjadi bagian penting dari
            keseharian saya. Saya suka membuat novel, karena melalui menulis
            saya bisa menuangkan ide, imajinasi, dan perasaan ke dalam cerita
            yang hidup. Selain itu, saya juga gemar membaca novel, yang membantu
            saya memperluas wawasan, memahami berbagai karakter, dan mendapatkan
            inspirasi untuk karya saya sendiri.
          </p>
          <p>
            Di luar dunia tulis-menulis, saya juga merupakan penggemar JKT48.
            Grup ini memberi saya semangat dan motivasi, terutama lewat
            lagu-lagunya yang penuh energi dan pesan positif. Dari mereka, saya
            belajar arti kerja keras, kebersamaan, dan semangat pantang menyerah.
          </p>
        </div>

        {/* Tombol Navigasi */}
        <button
          onClick={() =>
            document
              .getElementById("projects1")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Karya Saya
        </button>

        <button
          onClick={() =>
            document
              .getElementById("projects2")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Novel Favorit Saya
        </button>

        <button
          onClick={() =>
            document
              .getElementById("projects3")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          JKT48
        </button>
      </section>

      {/* KARYA SAYA */}
      <section id="projects1" className="projects1">
        <h2>Karya Saya</h2>
        <div className="jkt48-container">
          <img src="karyasaya.jpeg" alt="Foto Profil" className="jkt48" />
          <div className="jkt48-text">
            <p>
              Ini adalah novel karya saya sendiri yang berjudul “Cahaya di Balik
              Jendela.” Cerita ini berawal dari kisah seorang remaja yang hampir
              tenggelam dalam kegagalan dan rasa putus asa. Dunia yang ia pandang
              mulai kehilangan warna, hingga kehadiran seorang gadis perlahan
              mengubah segalanya.
            </p>
            <p>
              Novel ini menggambarkan bagaimana dua jiwa yang terluka dapat saling
              menyembuhkan. Persahabatan mereka tumbuh menjadi sesuatu yang lebih
              dalam—sebuah kebutuhan untuk saling ada di setiap langkah. Pesannya:
              di balik setiap jendela yang tertutup, selalu ada cahaya yang
              menunggu untuk ditemukan; kita hanya perlu keberanian untuk
              membukanya.
            </p>
          </div>
        </div>
      </section>

      {/* NOVEL FAVORIT */}
      <section id="projects2" className="projects2">
        <h2>Novel Favorit Saya</h2>
        <div className="jkt48-container">
          <img src="novelfavorit.jpeg" alt="Foto Profil" className="jkt48" />
          <div className="jkt48-text">
            <p>
              Ini adalah novel favorit saya yang berjudul “The Secret
              Relationship.” Ceritanya berpusar pada dua murid SMA, Lea dan Leo,
              yang tiba-tiba harus menikah muda tanpa cinta dan tanpa persiapan
              apa pun.
            </p>
            <p>
              Kisah ini menggabungkan romansa rahasia, konflik batin, dan
              sentuhan komedi ringan yang membuat hubungan mereka semakin
              menarik. The Secret Relationship mengajarkan bahwa cinta bisa
              tumbuh dari keadaan paling tidak terduga.
            </p>
          </div>
        </div>
      </section>

      {/* JKT48 */}
      <section id="projects3" className="projects3">
        <h2>JKT48</h2>
        <div className="jkt48-container">
          <img src="ADEL.jpeg" alt="Foto Profil" className="jkt48" />
          <div className="jkt48-text">
            <p>
              Saya adalah salah satu penggemar JKT48, grup idola asal Indonesia
              yang selalu memberikan semangat dan inspirasi melalui lagu-lagunya.
            </p>
            <p>
              Dari berbagai member yang berbakat,{" "}
              <strong>oshi saya adalah Reva Fidela Adel Pantjoro</strong>.
              Melihat perjuangannya membuat saya semakin semangat untuk terus
              berusaha dalam hal yang saya sukai.
            </p>

            {/* Tombol Musik */}
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

      {/* QUOTE */}
      <section id="quote" className="quote">
        <h2>Kata Motivasi</h2>
        <blockquote>
          “Jangan Pernah Takut Untuk Mencoba Dengan Alasan Takut Gagal, Karena
          Kegagalan Adalah Awal Dari Kesuksesan”
        </blockquote>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="contact">
        <h2>Kontak</h2>
        <p className="Email">
          Email:{" "}
          <a href="mailto:zahabikhalaf7@gmail.com">
            zahabikhalaf7@gmail.com
          </a>
        </p>
        <p className="Instagram">
          Instagram:{" "}
          <a href="https://www.instagram.com/abiyyzz__?igsh=dmJ5dmJ2ZnMzZHFx">
            Instagram
          </a>
        </p>
        <p className="Whatsapp">
          Whatsapp:{" "}
          <a href="https://wasap.at/etgNVI">+62 857-4669-6663</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Zahabi Khalaf. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}

export default App;
