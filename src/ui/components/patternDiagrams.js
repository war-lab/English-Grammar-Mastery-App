// SVG Diagram Generator for Sentence Patterns

export const createPatternDiagram = (pattern) => {
  const svgs = {
    SV: `
      <svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Subject Box -->
        <rect x="20" y="20" width="80" height="60" rx="8" fill="url(#gradS)" stroke="#ff6b6b" stroke-width="2"/>
        <text x="60" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">S</text>
        <text x="60" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">主語</text>
        
        <!-- Arrow -->
        <path d="M 110 50 L 130 50" stroke="#ffd700" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
        
        <!-- Verb Box -->
        <rect x="140" y="20" width="80" height="60" rx="8" fill="url(#gradV)" stroke="#4ecdc4" stroke-width="2"/>
        <text x="180" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">V</text>
        <text x="180" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">動詞</text>
        
        <!-- Example -->
        <text x="150" y="105" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">Birds fly.</text>
        
        <!-- Gradients -->
        <defs>
          <linearGradient id="gradS" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ee5a6f;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradV" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4ecdc4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#44a8a0;stop-opacity:1" />
          </linearGradient>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#ffd700" />
          </marker>
        </defs>
      </svg>
    `,

    SVC: `
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Subject Box -->
        <rect x="20" y="20" width="80" height="60" rx="8" fill="url(#gradS)" stroke="#ff6b6b" stroke-width="2"/>
        <text x="60" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">S</text>
        <text x="60" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">主語</text>
        
        <!-- Arrow -->
        <path d="M 110 50 L 130 50" stroke="#ffd700" stroke-width="3" marker-end="url(#arrowhead)"/>
        
        <!-- Verb Box -->
        <rect x="140" y="20" width="80" height="60" rx="8" fill="url(#gradV)" stroke="#4ecdc4" stroke-width="2"/>
        <text x="180" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">V</text>
        <text x="180" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">動詞</text>
        
        <!-- Arrow -->
        <path d="M 230 50 L 250 50" stroke="#ffd700" stroke-width="3" marker-end="url(#arrowhead)"/>
        
        <!-- Complement Box -->
        <rect x="260" y="20" width="80" height="60" rx="8" fill="url(#gradC)" stroke="#a29bfe" stroke-width="2"/>
        <text x="300" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">C</text>
        <text x="300" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">補語</text>
        
        <!-- Equal Sign -->
        <text x="60" y="95" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">=</text>
        <path d="M 60 90 Q 150 70 300 90" stroke="#ffd700" stroke-width="2" fill="none" stroke-dasharray="5,5"/>
        
        <!-- Example -->
        <text x="210" y="115" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">She is happy.</text>
        
        <defs>
          <linearGradient id="gradS" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ee5a6f;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradV" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4ecdc4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#44a8a0;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradC" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#a29bfe;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#6c5ce7;stop-opacity:1" />
          </linearGradient>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#ffd700" />
          </marker>
        </defs>
      </svg>
    `,

    SVO: `
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Subject Box -->
        <rect x="20" y="20" width="80" height="60" rx="8" fill="url(#gradS)" stroke="#ff6b6b" stroke-width="2"/>
        <text x="60" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">S</text>
        <text x="60" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">主語</text>
        
        <!-- Arrow -->
        <path d="M 110 50 L 130 50" stroke="#ffd700" stroke-width="3" marker-end="url(#arrowhead)"/>
        
        <!-- Verb Box -->
        <rect x="140" y="20" width="80" height="60" rx="8" fill="url(#gradV)" stroke="#4ecdc4" stroke-width="2"/>
        <text x="180" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">V</text>
        <text x="180" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">動詞</text>
        
        <!-- Arrow -->
        <path d="M 230 50 L 250 50" stroke="#ffd700" stroke-width="3" marker-end="url(#arrowhead)"/>
        
        <!-- Object Box -->
        <rect x="260" y="20" width="80" height="60" rx="8" fill="url(#gradO)" stroke="#f7b731" stroke-width="2"/>
        <text x="300" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">O</text>
        <text x="300" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">目的語</text>
        
        <!-- Not Equal Sign -->
        <text x="180" y="105" text-anchor="middle" fill="#ff6b6b" font-size="20" font-weight="bold">S ≠ O</text>
        
        <!-- Example -->
        <text x="210" y="115" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">I play tennis.</text>
        
        <defs>
          <linearGradient id="gradS" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ee5a6f;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradV" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4ecdc4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#44a8a0;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradO" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f7b731;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f79f1f;stop-opacity:1" />
          </linearGradient>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#ffd700" />
          </marker>
        </defs>
      </svg>
    `,

    SVOO: `
      <svg viewBox="0 0 540 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Subject Box -->
        <rect x="20" y="20" width="80" height="60" rx="8" fill="url(#gradS)" stroke="#ff6b6b" stroke-width="2"/>
        <text x="60" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">S</text>
        <text x="60" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">主語</text>
        
        <!-- Arrow -->
        <path d="M 110 50 L 130 50" stroke="#ffd700" stroke-width="3" marker-end="url(#arrowhead)"/>
        
        <!-- Verb Box -->
        <rect x="140" y="20" width="80" height="60" rx="8" fill="url(#gradV)" stroke="#4ecdc4" stroke-width="2"/>
        <text x="180" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">V</text>
        <text x="180" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">動詞</text>
        
        <!-- Arrow -->
        <path d="M 230 50 L 250 50" stroke="#ffd700" stroke-width="3" marker-end="url(#arrowhead)"/>
        
        <!-- Object 1 Box -->
        <rect x="260" y="20" width="80" height="60" rx="8" fill="url(#gradO)" stroke="#f7b731" stroke-width="2"/>
        <text x="300" y="40" text-anchor="middle" fill="white" font-size="20" font-weight="bold">O₁</text>
        <text x="300" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">誰に</text>
        
        <!-- Arrow -->
        <path d="M 350 50 L 370 50" stroke="#ffd700" stroke-width="3" marker-end="url(#arrowhead)"/>
        
        <!-- Object 2 Box -->
        <rect x="380" y="20" width="80" height="60" rx="8" fill="url(#gradO)" stroke="#f7b731" stroke-width="2"/>
        <text x="420" y="40" text-anchor="middle" fill="white" font-size="20" font-weight="bold">O₂</text>
        <text x="420" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">何を</text>
        
        <!-- Example -->
        <text x="270" y="115" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">She gave me a book.</text>
        
        <defs>
          <linearGradient id="gradS" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ee5a6f;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradV" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4ecdc4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#44a8a0;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradO" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f7b731;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f79f1f;stop-opacity:1" />
          </linearGradient>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#ffd700" />
          </marker>
        </defs>
      </svg>
    `,

    SVOC: `
      <svg viewBox="0 0 540 120" xmlns="http://www.w3.org/2000/svg">
        <!-- Subject Box -->
        <rect x="20" y="20" width="80" height="60" rx="8" fill="url(#gradS)" stroke="#ff6b6b" stroke-width="2"/>
        <text x="60" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">S</text>
        <text x="60" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">主語</text>
        
        <!-- Arrow -->
        <path d="M 110 50 L 130 50" stroke="#ffd700" stroke-width="3" marker-end="url(#arrowhead)"/>
        
        <!-- Verb Box -->
        <rect x="140" y="20" width="80" height="60" rx="8" fill="url(#gradV)" stroke="#4ecdc4" stroke-width="2"/>
        <text x="180" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">V</text>
        <text x="180" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">動詞</text>
        
        <!-- Arrow -->
        <path d="M 230 50 L 250 50" stroke="#ffd700" stroke-width="3" marker-end="url(#arrowhead)"/>
        
        <!-- Object Box -->
        <rect x="260" y="20" width="80" height="60" rx="8" fill="url(#gradO)" stroke="#f7b731" stroke-width="2"/>
        <text x="300" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">O</text>
        <text x="300" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">目的語</text>
        
        <!-- Arrow -->
        <path d="M 350 50 L 370 50" stroke="#ffd700" stroke-width="3" marker-end="url(#arrowhead)"/>
        
        <!-- Complement Box -->
        <rect x="380" y="20" width="80" height="60" rx="8" fill="url(#gradC)" stroke="#a29bfe" stroke-width="2"/>
        <text x="420" y="45" text-anchor="middle" fill="white" font-size="24" font-weight="bold">C</text>
        <text x="420" y="65" text-anchor="middle" fill="white" font-size="12" opacity="0.8">補語</text>
        
        <!-- Equal Sign -->
        <text x="340" y="95" text-anchor="middle" fill="#ffd700" font-size="20" font-weight="bold">O = C</text>
        
        <!-- Example -->
        <text x="270" y="115" text-anchor="middle" fill="#ffd700" font-size="14" font-weight="bold">We call him Tom.</text>
        
        <defs>
          <linearGradient id="gradS" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ee5a6f;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradV" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4ecdc4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#44a8a0;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradO" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f7b731;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f79f1f;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradC" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#a29bfe;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#6c5ce7;stop-opacity:1" />
          </linearGradient>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#ffd700" />
          </marker>
        </defs>
      </svg>
    `
  };

  return svgs[pattern] || '';
};
