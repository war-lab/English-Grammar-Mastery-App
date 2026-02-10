/* Modal Component for Result Display */
export const createResultModal = (score, onClose) => {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
  overlay.style.zIndex = '9999';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.animation = 'fadeIn 0.3s ease-in';

  const modal = document.createElement('div');
  modal.style.background = 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))';
  modal.style.backdropFilter = 'blur(20px)';
  modal.style.border = '2px solid rgba(255, 255, 255, 0.2)';
  modal.style.borderRadius = '1.5rem';
  modal.style.padding = '3rem';
  modal.style.maxWidth = '600px';
  modal.style.width = '90%';
  modal.style.textAlign = 'center';
  modal.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
  modal.style.animation = 'scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

  // Score-based evaluation
  let title = '';
  let emoji = '';
  let message = '';
  let color = '';
  let bgGradient = '';

  if (score >= 90) {
    title = '🎊 PERFECT! 完璧です！';
    emoji = '🏆';
    message = '素晴らしい！あなたは真の文型マスターです！';
    color = '#ffd700';
    bgGradient = 'linear-gradient(135deg, #ffd700, #ffed4e)';
  } else if (score >= 80) {
    title = '🌟 EXCELLENT! 優秀です！';
    emoji = '🎖️';
    message = 'とても良くできました！もう少しでパーフェクトです！';
    color = '#00ff88';
    bgGradient = 'linear-gradient(135deg, #00ff88, #00d4aa)';
  } else if (score >= 70) {
    title = '✨ GREAT! 素晴らしい！';
    emoji = '🎯';
    message = '良い成績です！この調子で頑張りましょう！';
    color = '#00bfff';
    bgGradient = 'linear-gradient(135deg, #00bfff, #0099ff)';
  } else if (score >= 60) {
    title = '👍 GOOD! 良いです！';
    emoji = '💪';
    message = '順調です！さらに上を目指しましょう！';
    color = '#9370db';
    bgGradient = 'linear-gradient(135deg, #9370db, #8a2be2)';
  } else if (score >= 50) {
    title = '😊 NOT BAD! 悪くない！';
    emoji = '📚';
    message = '半分以上正解！復習して再挑戦しましょう！';
    color = '#ffa500';
    bgGradient = 'linear-gradient(135deg, #ffa500, #ff8c00)';
  } else if (score >= 40) {
    title = '💡 KEEP TRYING! がんばろう！';
    emoji = '🔥';
    message = 'もう少し！復習してから再チャレンジ！';
    color = '#ff6b6b';
    bgGradient = 'linear-gradient(135deg, #ff6b6b, #ee5a6f)';
  } else if (score >= 30) {
    title = '📖 STUDY MORE! もっと学ぼう！';
    emoji = '📝';
    message = '基礎から復習しましょう！';
    color = '#ff4757';
    bgGradient = 'linear-gradient(135deg, #ff4757, #ff3838)';
  } else if (score >= 20) {
    title = '🎯 PRACTICE! 練習あるのみ！';
    emoji = '💭';
    message = 'レッスンをもう一度確認してみましょう！';
    color = '#ff6348';
    bgGradient = 'linear-gradient(135deg, #ff6348, #ff4757)';
  } else if (score >= 10) {
    title = '📚 BACK TO BASICS! 基礎から！';
    emoji = '🌱';
    message = 'レッスンで基礎をしっかり学びましょう！';
    color = '#95a5a6';
    bgGradient = 'linear-gradient(135deg, #95a5a6, #7f8c8d)';
  } else {
    title = '💪 DON\'T GIVE UP! あきらめないで！';
    emoji = '🌟';
    message = 'まずはレッスンから始めましょう！';
    color = '#bdc3c7';
    bgGradient = 'linear-gradient(135deg, #bdc3c7, #95a5a6)';
  }

  modal.innerHTML = `
    <div style="font-size: 6rem; margin-bottom: 1rem; animation: bounce 1s ease;">${emoji}</div>
    <h2 style="font-size: 2rem; margin-bottom: 1rem; background: ${bgGradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 800;">${title}</h2>
    <div style="font-size: 4rem; margin: 2rem 0; color: ${color}; font-weight: bold; text-shadow: 0 0 20px ${color};">${score}問正解</div>
    <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 2rem;">${message}</p>
    <button id="modal-close-btn" class="btn btn-primary" style="font-size: 1.2rem; padding: 1rem 3rem; width: 100%; max-width: 300px;">解説ページに戻る</button>
  `;

  overlay.appendChild(modal);

  const closeBtn = modal.querySelector('#modal-close-btn');
  closeBtn.onclick = () => {
    overlay.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
      onClose();
    }, 300);
  };

  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    @keyframes scaleIn {
      from { transform: scale(0.5); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
  `;
  document.head.appendChild(style);

  return overlay;
};
