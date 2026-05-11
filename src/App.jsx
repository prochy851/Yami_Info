import './index.css'
import Particles from './Particles';

function App() {
  return (
    <main className="page">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Particles
          particleColors={["#fff8f8"]}
          particleCount={600}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <header>
        <div>
          <p>Hi, I'm <strong>Yami</strong>. This page shares my passions for web design and 3D modeling.</p>
          <h1>About Me</h1>
        </div>
        <div>
        </div>
      </header>

      <section className="grid">
        <article className="card fade-in">
          <h2>About</h2>
          <p>I'm a web enthusiast who enjoys turning ideas into polished pages. I'm curious about front-end
            design, responsive layouts, and making every website easy to read and navigate.</p>
          <div className="contact">
            <div><strong>Location:</strong> Czech republic</div>
            <div><strong>Focus:</strong> web development, design, games, modeling</div>
          </div>
        </article>

        <article className="card fade-in">
          <h2>Skills</h2>
          <div className="tag">HTML</div>
          <div className="tag">CSS</div>
          <div className="tag">JavaScript</div>
          <div className="tag">Unity</div>
          <div className="tag">Blender</div>
          <div className="tag">3D modeling</div>
        </article>

        <article className="card fade-in">
          <h2>3D Modeling</h2>
          <p>I create 3D models for characters, scenes, and concept visuals using Blender. I enjoy building
            stylized assets, refining shapes, and preparing models for rendering or animation.</p>
          <ul>
            <li>Modeling</li>
            <li>Texturing and material setup</li>
            <li>Scene composition and lighting</li>
            <li>Optimizing models for presentation</li>
          </ul>
        </article>

        <article className="card fade-in">
          <h2>Interests</h2>
          <ul>
            <li>Videogames</li>
            <li>Web Design and Programming</li>
            <li>Anime and Manga</li>
            <li>Books</li>
            <li>3D Modeling</li>
          </ul>
        </article>

        <article className="card fade-in">
          <h2>Projects</h2>
          <p>Here are some of my recent works:</p>
          <ul>
            <li><strong>3D models of furniture:</strong> The 3D models will be at Unity Asset Store.</li>
            <li><strong>Videogame Lurking Demons</strong> i created that game for school project.</li>
          </ul>
        </article>

        <article className="card fade-in">
          <h2>Contact</h2>
          <p>If you want to connect, you can update this section with your email or social link.</p>
          <div className="contact">
            <a href="mailto:jakubprochazka851@gmail.com">jakubprochazka851@gmail.com</a>
            <a href="https://github.com/prochy851">GitHub</a>
          </div>
        </article>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px', color: '#d8c5ff' }}>
        <p>&copy; 2026 Jakub. All rights reserved.</p>
      </footer>
    </main >
  );
}

export default App
