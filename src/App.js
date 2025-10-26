import { useState } from "react";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <header className="header">
        <h1>Zahabi Khalaf</h1>
        <h3>Selamat Datang Di Portofolio Saya</h3>

        {/* Tombol Mode Gelap */}
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Mode Terang" : "🌙 Mode Gelap"}
        </button>
      </header>

      <section className="profil">
        <h2>Profil Saya</h2>
        <img
          src="fotoku.jpeg"
          alt="Foto Profil"
          className="foto-profil"
        />
        <p><strong>Nama:</strong> Zahabi Khalaf</p>
        <p><strong>Kelas:</strong> 11 RPL 1</p>
        <p><strong>Hobi:</strong> Membuat Novel, Membaca Novel, Desain, Dan Coding</p>
      </section>

      <section className="about">
        <h2>Tentang Saya</h2>
        <p>
          Saya adalah pelajar yang sangat tertarik dengan dunia pemrograman dan desain. 
          Selain itu, saya juga gemar membaca novel dan menulis cerita sebagai bentuk ekspresi kreatif. 
          Dunia coding dan desain bagi saya adalah cara untuk menciptakan sesuatu yang bermanfaat dan indah.
        </p>
      </section>

      <section className="projects">
        <h2>Bakat dan Minat Saya</h2>
        <ul>
          <li>Coding</li>
          <li>Desain</li>
          <li>Membaca Novel</li>
          <li>Membuat Novel</li>
          <li>Pencak Silat</li>
          <li>Basket</li>
        </ul>
      </section>

 <section className="projects">
        <h2>Hobi Saya</h2>
        <ul>
          Saya memiliki beberapa hobi yang menjadi bagian penting dari keseharian saya. Saya suka membuat novel, karena melalui menulis saya bisa menuangkan ide, imajinasi, dan perasaan ke dalam cerita yang hidup. Selain itu, saya juga gemar membaca novel, yang membantu saya memperluas wawasan, memahami berbagai karakter, dan mendapatkan inspirasi untuk karya saya sendiri.
          Di luar dunia tulis-menulis, saya juga merupakan penggemar JKT48. Grup ini memberi saya semangat dan motivasi, terutama lewat lagu-lagunya yang penuh energi dan pesan positif. Dari mereka, saya belajar arti kerja keras, kebersamaan, dan semangat pantang menyerah.
        </ul>
        <button onClick={() => {
  const section = document.getElementById('projects');
  section.scrollIntoView({ behavior: 'smooth' });
}}>
  Karya Saya
</button>
        <button onClick={() => {
  const section = document.getElementById('projects');
  section.scrollIntoView({ behavior: 'smooth' });
}}>
  Novel Vaforit Saya
</button>
<button onClick={() => {
  const section = document.getElementById('projects');
  section.scrollIntoView({ behavior: 'smooth' });
}}>
  JKT48
</button>
      </section> 

      <section id="projects" className="projects">
        <h2>Karya Saya</h2>
        <ul>
         <p>Masih Dalam Tahap Pengembangan...</p>
        </ul>
      </section>

<section id="projects"className="projects">
        <h2>Novel Vaforit Saya</h2>
        <ul>
         <p>Masih Dalam Tahap Pengembangan...</p>
        </ul>
      </section>


 <section id="projects" className="projects">
  <h2>JKT48</h2>
  <div className="jkt48-container">
    <img src="ADEL.jpeg" alt="Foto Profil" className="jkt48" />
    <div className="jkt48-text">
      <p>
        Saya adalah salah satu penggemar JKT48, grup idola asal Indonesia yang selalu
        memberikan semangat dan inspirasi melalui lagu-lagunya. Bagi saya, JKT48 bukan hanya
        sekadar grup musik, tetapi juga motivasi untuk terus berkembang dan percaya diri
        dalam mengejar mimpi.
      </p>
      <p>
        Dari berbagai member yang berbakat, <strong>oshi saya adalah Reva Fidela Adel Pantjoro</strong>.
        Saya sangat mengagumi kepribadian dan semangatnya yang ceria, sopan, dan penuh dedikasi.
        Adel mampu menunjukkan bahwa kerja keras dan konsistensi bisa membawa seseorang menuju
        kesuksesan. Melihat perjuangannya membuat saya semakin semangat untuk terus berusaha
        dalam hal yang saya sukai, baik di dunia desain, coding, maupun karya kreatif lainnya.
      </p>
    </div>
  </div>
</section>

      <section className="quote">
        <h2>Kata Motivasi</h2>
        <blockquote>
          “Jangan Pernah Takut Untuk Mencoba Dengan Alasan Takut Gagal, Karena Kegagalan Adalah Awal Dari Kesuksesan”
        </blockquote>
      </section>

      <section className="contact">
        <h2>Kontak</h2>
        <p>Email: <a href="mailto:zahabikhalaf7@gmail.com">zahabikhalaf7@gmail.com</a></p>
      </section>

      <footer>
        <p>© 2025 Zahabi Khalaf. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}

export default App;
