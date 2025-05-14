// BingoGame.js - Versão Responsiva
import React, { useState, useEffect } from 'react';

// Language translations
const translations = {
  // Portuguese (default)
  pt: {
    title: "BingoGammer",
    tagline: "O jogo de bingo mais divertido da web",
    startGame: "Iniciar Jogo",
    stopGame: "Parar Jogo",
    darkMode: "Modo Escuro",
    lightMode: "Modo Claro",
    players: "Jogadores",
    speed: "Velocidade",
    fast: "Rápido (1s)",
    normal: "Normal (3s)",
    slow: "Lento (5s)",
    welcome: "Bem-vindo ao BingoGammer!",
    gamePaused: "Jogo Pausado",
    drawingInProgress: "Sorteio em Andamento",
    numbersDrawn: "Números sorteados",
    clickToStart: "Clique em Iniciar Jogo para começar",
    autoMarkInfo: "Os números são marcados automaticamente na sua cartela.",
    weHaveWinner: "Temos um vencedor!",
    youWon: "Você venceu! 🎉",
    playerWon: "venceu! 🎉",
    yourCard: "Sua Cartela",
    drawnNumbers: "Números Sorteados",
    noNumbersDrawn: "Nenhum número sorteado ainda.",
    otherPlayers: "Outros Jogadores",
    numbersMarked: "números marcados",
    allRightsReserved: "Todos os direitos reservados",
    playerPrefix: "Jogador",
    language: "Idioma",
    chooseLanguage: "Escolha o idioma",
    joinNow: "Junte-se a milhares de jogadores!",
    callFriends: "Chame seus amigos para jogar"
  },
  // English
  en: {
    title: "BingoGammer",
    tagline: "The most fun bingo game on the web",
    startGame: "Start Game",
    stopGame: "Stop Game",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    players: "Players",
    speed: "Speed",
    fast: "Fast (1s)",
    normal: "Normal (3s)",
    slow: "Slow (5s)",
    welcome: "Welcome to BingoGammer!",
    gamePaused: "Game Paused",
    drawingInProgress: "Drawing in Progress",
    numbersDrawn: "Numbers drawn",
    clickToStart: "Click Start Game to begin",
    autoMarkInfo: "Numbers are automatically marked on your card.",
    weHaveWinner: "We have a winner!",
    youWon: "You won! 🎉",
    playerWon: "won! 🎉",
    yourCard: "Your Card",
    drawnNumbers: "Drawn Numbers",
    noNumbersDrawn: "No numbers drawn yet.",
    otherPlayers: "Other Players",
    numbersMarked: "numbers marked",
    allRightsReserved: "All rights reserved",
    playerPrefix: "Player",
    language: "Language",
    chooseLanguage: "Choose language",
    joinNow: "Join thousands of players!",
    callFriends: "Invite your friends to play"
  },
  // French
  fr: {
    title: "BingoGammer",
    tagline: "Le jeu de bingo le plus amusant du web",
    startGame: "Commencer",
    stopGame: "Arrêter",
    darkMode: "Mode Sombre",
    lightMode: "Mode Clair",
    players: "Joueurs",
    speed: "Vitesse",
    fast: "Rapide (1s)",
    normal: "Normale (3s)",
    slow: "Lente (5s)",
    welcome: "Bienvenue à BingoGammer!",
    gamePaused: "Jeu en Pause",
    drawingInProgress: "Tirage en Cours",
    numbersDrawn: "Numéros tirés",
    clickToStart: "Cliquez sur Commencer pour débuter",
    autoMarkInfo: "Les numéros sont automatiquement marqués sur votre carte.",
    weHaveWinner: "Nous avons un gagnant!",
    youWon: "Vous avez gagné! 🎉",
    playerWon: "a gagné! 🎉",
    yourCard: "Votre Carte",
    drawnNumbers: "Numéros Tirés",
    noNumbersDrawn: "Aucun numéro tiré pour l'instant.",
    otherPlayers: "Autres Joueurs",
    numbersMarked: "numéros marqués",
    allRightsReserved: "Tous droits réservés",
    playerPrefix: "Joueur",
    language: "Langue",
    chooseLanguage: "Choisir la langue",
    joinNow: "Rejoignez des milliers de joueurs!",
    callFriends: "Invitez vos amis à jouer"
  },
  // Italian
  it: {
    title: "BingoGammer",
    tagline: "Il gioco di bingo più divertente del web",
    startGame: "Inizia Gioco",
    stopGame: "Ferma Gioco",
    darkMode: "Modalità Scura",
    lightMode: "Modalità Chiara",
    players: "Giocatori",
    speed: "Velocità",
    fast: "Veloce (1s)",
    normal: "Normale (3s)",
    slow: "Lenta (5s)",
    welcome: "Benvenuto a BingoGammer!",
    gamePaused: "Gioco in Pausa",
    drawingInProgress: "Estrazione in Corso",
    numbersDrawn: "Numeri estratti",
    clickToStart: "Clicca su Inizia Gioco per cominciare",
    autoMarkInfo: "I numeri vengono segnati automaticamente sulla tua cartella.",
    weHaveWinner: "Abbiamo un vincitore!",
    youWon: "Hai vinto! 🎉",
    playerWon: "ha vinto! 🎉",
    yourCard: "La Tua Cartella",
    drawnNumbers: "Numeri Estratti",
    noNumbersDrawn: "Nessun numero estratto ancora.",
    otherPlayers: "Altri Giocatori",
    numbersMarked: "numeri segnati",
    allRightsReserved: "Tutti i diritti riservati",
    playerPrefix: "Giocatore",
    language: "Lingua",
    chooseLanguage: "Scegli la lingua",
    joinNow: "Unisciti a migliaia di giocatori!",
    callFriends: "Invita i tuoi amici a giocare"
  },
  // Spanish
  es: {
    title: "BingoGammer",
    tagline: "El juego de bingo más divertido de la web",
    startGame: "Iniciar Juego",
    stopGame: "Detener Juego",
    darkMode: "Modo Oscuro",
    lightMode: "Modo Claro",
    players: "Jugadores",
    speed: "Velocidad",
    fast: "Rápida (1s)",
    normal: "Normal (3s)",
    slow: "Lenta (5s)",
    welcome: "¡Bienvenido a BingoGammer!",
    gamePaused: "Juego Pausado",
    drawingInProgress: "Sorteo en Progreso",
    numbersDrawn: "Números sorteados",
    clickToStart: "Haz clic en Iniciar Juego para comenzar",
    autoMarkInfo: "Los números se marcan automáticamente en tu cartón.",
    weHaveWinner: "¡Tenemos un ganador!",
    youWon: "¡Has ganado! 🎉",
    playerWon: "ha ganado! 🎉",
    yourCard: "Tu Cartón",
    drawnNumbers: "Números Sorteados",
    noNumbersDrawn: "Aún no se ha sorteado ningún número.",
    otherPlayers: "Otros Jugadores",
    numbersMarked: "números marcados",
    allRightsReserved: "Todos los derechos reservados",
    playerPrefix: "Jugador",
    language: "Idioma",
    chooseLanguage: "Elegir idioma",
    joinNow: "¡Únete a miles de jugadores!",
    callFriends: "Invita a tus amigos a jugar"
  }
};

const BingoGame = () => {
  // State to store player's card
  const [playerCard, setPlayerCard] = useState([]);
  // State to store drawn numbers
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  // State to control if the game is running
  const [gameRunning, setGameRunning] = useState(false);
  // State to store the numbers marked by the player
  const [markedNumbers, setMarkedNumbers] = useState([]);
  // State to control if the player has won
  const [winner, setWinner] = useState(false);
  // State to store the last drawn number
  const [lastNumber, setLastNumber] = useState(null);
  // State to store all generated cards (simulating other players)
  const [allCards, setAllCards] = useState([]);
  // Number of simulated players
  const [playerCount, setPlayerCount] = useState(5);
  // List of winners
  const [winners, setWinners] = useState([]);
  // Interval between draws (in ms)
  const [drawInterval, setDrawInterval] = useState(3000);
  // Interface theme
  const [theme, setTheme] = useState('light');
  // Language selection (default: Portuguese)
  const [language, setLanguage] = useState('pt');
  // State to detect mobile devices
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // State to detect very small screens
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 480);
  // Get translations for current language
  const t = translations[language];

  // Effect to detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallScreen(window.innerWidth < 480);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to generate a random number between min and max
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Function to generate a bingo card
  const generateBingoCard = () => {
    const columns = {
      B: generateUniqueNumbers(1, 15, 5),
      I: generateUniqueNumbers(16, 30, 5),
      N: generateUniqueNumbers(31, 45, 5),
      G: generateUniqueNumbers(46, 60, 5),
      O: generateUniqueNumbers(61, 75, 5)
    };
    
    // The center is usually a free space
    columns.N[2] = "FREE";
    
    return columns;
  };

  // Function to generate N unique numbers in a range
  const generateUniqueNumbers = (min, max, count) => {
    const numbers = [];
    while (numbers.length < count) {
      const num = getRandomNumber(min, max);
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers;
  };

  // Initialize the game
  const initGame = () => {
    // Clear previous states
    setDrawnNumbers([]);
    setMarkedNumbers([]);
    setWinner(false);
    setLastNumber(null);
    setWinners([]);
    
    // Generate player's card
    const newPlayerCard = generateBingoCard();
    setPlayerCard(newPlayerCard);
    
    // Generate cards for simulated players
    const simulatedCards = [];
    for (let i = 0; i < playerCount; i++) {
      simulatedCards.push({
        id: `player-${i+1}`,
        name: `${t.playerPrefix} ${i+1}`,
        card: generateBingoCard(),
        marked: ["FREE"] // Start with the free space marked
      });
    }
    setAllCards(simulatedCards);
  };

  // Start the game
  const startGame = () => {
    initGame();
    setGameRunning(true);
  };

  // Stop the game
  const stopGame = () => {
    setGameRunning(false);
  };

  // Generate a new number for the draw
  const drawNumber = () => {
    if (!gameRunning) return;
    
    // Check if all 75 numbers have already been drawn
    if (drawnNumbers.length >= 75) {
      stopGame();
      return;
    }
    
    // Draw a new number that hasn't been drawn yet
    let newNumber;
    do {
      newNumber = getRandomNumber(1, 75);
    } while (drawnNumbers.includes(newNumber));
    
    // Update the list of drawn numbers and the last number
    setDrawnNumbers(prev => [...prev, newNumber]);
    setLastNumber(newNumber);
    
    // Check if any simulated player marked the number
    checkSimulatedPlayers(newNumber);
  };

  // Check if any simulated player marked the number
  const checkSimulatedPlayers = (number) => {
    const updatedCards = allCards.map(player => {
      const marked = [...player.marked];
      
      // Check if the number is on the player's card
      Object.keys(player.card).forEach(letter => {
        const column = player.card[letter];
        if (column.includes(number)) {
          marked.push(number);
        }
      });
      
      return {
        ...player,
        marked
      };
    });
    
    setAllCards(updatedCards);
    
    // Check if any player has won
    updatedCards.forEach(player => {
      if (checkWinCondition(player.card, player.marked) && !winners.includes(player.id)) {
        setWinners(prev => [...prev, player.id]);
        // If it's the first winner, stop the game
        if (winners.length === 0) {
          setTimeout(() => {
            stopGame();
          }, 1000);
        }
      }
    });
  };

  // Mark a number on the player's card
  const markNumber = (number) => {
    // Don't allow marking if the game isn't running
    if (!gameRunning) return;
    
    // Mark the number if it's not already marked
    if (!markedNumbers.includes(number)) {
      const newMarkedNumbers = [...markedNumbers, number];
      setMarkedNumbers(newMarkedNumbers);
      
      // Check if the player has won
      if (checkWinCondition(playerCard, newMarkedNumbers)) {
        setWinner(true);
        setWinners(prev => [...prev, "you"]);
        stopGame();
      }
    }
  };

  // Check if the player has won (complete row, column, or diagonal)
  const checkWinCondition = (card, marked) => {
    // Check if the "FREE" center is marked, if not, mark it
    if (!marked.includes("FREE")) {
      marked = [...marked, "FREE"];
    }
    
    // Check rows (one complete row for each index)
    for (let i = 0; i < 5; i++) {
      if (
        marked.includes(card.B[i]) &&
        marked.includes(card.I[i]) &&
        marked.includes(card.N[i]) &&
        marked.includes(card.G[i]) &&
        marked.includes(card.O[i])
      ) {
        return true;
      }
    }
    
    // Check columns (one complete column for each letter)
    const letters = ['B', 'I', 'N', 'G', 'O'];
    for (const letter of letters) {
      if (
        card[letter].every(num => marked.includes(num))
      ) {
        return true;
      }
    }
    
    // Check main diagonal (top left corner to bottom right corner)
    if (
      marked.includes(card.B[0]) &&
      marked.includes(card.I[1]) &&
      marked.includes(card.N[2]) && // This is the FREE space
      marked.includes(card.G[3]) &&
      marked.includes(card.O[4])
    ) {
      return true;
    }
    
    // Check secondary diagonal (top right corner to bottom left corner)
    if (
      marked.includes(card.O[0]) &&
      marked.includes(card.G[1]) &&
      marked.includes(card.N[2]) && // This is the FREE space
      marked.includes(card.I[3]) &&
      marked.includes(card.B[4])
    ) {
      return true;
    }
    
    return false;
  };

  // Effect to automatically draw numbers when the game is running
  useEffect(() => {
    let interval = null;
    
    if (gameRunning && !winner && winners.length === 0) {
      interval = setInterval(drawNumber, drawInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameRunning, winner, drawnNumbers, winners]);

  // Effect to automatically mark numbers on the player's card
  useEffect(() => {
    if (drawnNumbers.length > 0) {
      const lastDrawn = drawnNumbers[drawnNumbers.length - 1];
      markNumber(lastDrawn);
    }
  }, [drawnNumbers]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Modern color palette
  const colors = {
    primary: '#4F46E5', // Indigo
    secondary: '#10B981', // Emerald
    accent: '#F59E0B', // Amber
    danger: '#EF4444', // Red
    success: '#10B981', // Green
    warning: '#F59E0B', // Amber
    info: '#3B82F6', // Blue
    light: '#F3F4F6', // Gray-100
    dark: '#1F2937', // Gray-800
  };

  // Theme-based styles (modernized)
  const themeStyles = theme === 'light' 
    ? { 
        background: '#F9FAFB', // Gray-50
        text: '#1F2937', // Gray-800
        card: '#FFFFFF', // White
        cardBorder: '#E5E7EB', // Gray-200
        highlight: colors.accent,
        button: {
          primary: colors.primary,
          secondary: colors.secondary,
          danger: colors.danger
        }
      }
    : {
        background: '#111827', // Gray-900
        text: '#F9FAFB', // Gray-50
        card: '#1F2937', // Gray-800
        cardBorder: '#374151', // Gray-700
        highlight: colors.accent,
        button: {
          primary: colors.primary,
          secondary: colors.secondary,
          danger: colors.danger
        }
      };

  // Custom CSS styles with responsiveness
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: isMobile ? '0.5rem' : '1rem',
      backgroundColor: themeStyles.background,
      color: themeStyles.text,
      transition: 'all 0.3s ease'
    },
    header: {
      width: '100%',
      maxWidth: '1024px',
      padding: isMobile ? '0.5rem 0' : '1rem 0',
      marginBottom: isMobile ? '1rem' : '2rem',
      borderBottom: `1px solid ${themeStyles.cardBorder}`,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? '0.5rem' : '0'
    },
    content: {
      width: '100%',
      maxWidth: '1024px'
    },
    title: {
      fontSize: isMobile ? '1.75rem' : '2.5rem',
      fontWeight: 'bold',
      color: colors.primary,
      margin: 0,
      textShadow: '0 1px 2px rgba(0,0,0,0.1)'
    },
    tagline: {
      fontSize: '1rem', 
      color: theme === 'light' ? '#4B5563' : '#9CA3AF',
      marginTop: '0.25rem'
    },
    languageSelect: {
      padding: '0.5rem',
      borderRadius: '0.375rem',
      border: `1px solid ${themeStyles.cardBorder}`,
      backgroundColor: themeStyles.card,
      color: themeStyles.text,
      marginLeft: isMobile ? '0' : '0.5rem',
      outline: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    button: {
      padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
      borderRadius: '0.375rem',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    primaryButton: {
      backgroundColor: themeStyles.button.primary,
      color: 'white'
    },
    secondaryButton: {
      backgroundColor: themeStyles.button.secondary,
      color: 'white'
    },
    dangerButton: {
      backgroundColor: themeStyles.button.danger,
      color: 'white'
    },
    disabledButton: {
      opacity: 0.6,
      cursor: 'not-allowed'
    },
    card: {
      backgroundColor: themeStyles.card,
      borderRadius: '0.5rem',
      padding: isMobile ? '0.75rem' : '1.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      marginBottom: '1.5rem',
      border: `1px solid ${themeStyles.cardBorder}`,
      transition: 'all 0.3s ease'
    },
    gameStatusCard: {
      background: `linear-gradient(135deg, ${themeStyles.card} 0%, ${theme === 'light' ? '#F3F4F6' : '#374151'} 100%)`,
      borderRadius: '0.5rem',
      padding: isMobile ? '0.75rem' : '1.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      marginBottom: '1.5rem',
      border: `1px solid ${themeStyles.cardBorder}`,
      transition: 'all 0.3s ease'
    },
    cardHeader: {
      fontSize: isMobile ? '1rem' : '1.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      color: colors.primary
    },
    bingoCard: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: isMobile ? '0.125rem' : '0.5rem',
      margin: isMobile ? '0.5rem 0' : '1rem 0',
      width: '100%'
    },
    bingoHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: isMobile ? '0.25rem' : '0.75rem',
      fontWeight: 'bold',
      fontSize: isMobile ? '0.875rem' : '1.25rem',
      color: colors.primary
    },
    bingoCell: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: isMobile ? '0' : '0.25rem',
      fontWeight: 'bold',
      fontSize: isSmallScreen ? 'calc(8vw - 8px)' : (isMobile ? '0.875rem' : '1.125rem'),
      borderRadius: '50%',
      width: isSmallScreen ? 'calc(18vw - 4px)' : (isMobile ? '2.25rem' : '3rem'),
      height: isSmallScreen ? 'calc(18vw - 4px)' : (isMobile ? '2.25rem' : '3rem'),
      margin: isSmallScreen ? '1px' : (isMobile ? '0.125rem' : '0.25rem'),
      border: isSmallScreen ? '1px solid' : '2px solid',
      transition: 'all 0.2s ease'
    },
    drawnNumber: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: isMobile ? '2rem' : '2.5rem',
      height: isMobile ? '2rem' : '2.5rem',
      borderRadius: '50%',
      fontWeight: 'bold',
      margin: isMobile ? '0.125rem' : '0.25rem',
      fontSize: isMobile ? '0.75rem' : '0.875rem'
    },
    lastDrawnNumber: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: isMobile ? '4rem' : '5rem',
      height: isMobile ? '4rem' : '5rem',
      borderRadius: '50%',
      fontWeight: 'bold',
      fontSize: isMobile ? '1.5rem' : '2rem',
      backgroundColor: themeStyles.highlight,
      color: '#000',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      animation: 'pulse 1.5s infinite'
    },
    winnerAlert: {
      backgroundColor: colors.success,
      color: 'white',
      padding: '1rem',
      borderRadius: '0.375rem',
      marginTop: '1rem',
      animation: 'slideDown 0.5s ease-out'
    },
    playerCard: {
      padding: isMobile ? '0.75rem' : '1rem',
      borderRadius: '0.375rem',
      marginBottom: isMobile ? '0.5rem' : '0.75rem',
      border: `1px solid ${themeStyles.cardBorder}`,
      backgroundColor: themeStyles.card,
      transition: 'all 0.3s ease'
    },
    playerWinner: {
      backgroundColor: colors.success,
      color: 'white',
      border: `1px solid ${colors.success}`
    },
    progressBar: {
      width: '100%',
      height: '0.5rem',
      backgroundColor: theme === 'light' ? '#E5E7EB' : '#374151',
      borderRadius: '9999px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      borderRadius: '9999px',
      backgroundColor: colors.primary,
      transition: 'width 0.3s ease'
    },
    footer: {
      marginTop: '2rem',
      padding: '1rem 0',
      borderTop: `1px solid ${themeStyles.cardBorder}`,
      textAlign: 'center',
      width: '100%',
      maxWidth: '1024px',
      color: theme === 'light' ? '#6B7280' : '#9CA3AF',
      fontSize: '0.875rem'
    },
    callToAction: {
      textAlign: 'center', 
      marginTop: isMobile ? '0.75rem' : '1.5rem',
      marginBottom: isMobile ? '1rem' : '2rem',
      padding: isMobile ? '1rem' : '1.5rem',
      borderRadius: '0.5rem',
      backgroundColor: theme === 'light' ? 'rgba(79, 70, 229, 0.1)' : 'rgba(79, 70, 229, 0.2)',
      border: `1px solid ${theme === 'light' ? 'rgba(79, 70, 229, 0.2)' : 'rgba(79, 70, 229, 0.4)'}`,
    },
    ctaHeading: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: '0.5rem'
    },
    ctaText: {
      fontSize: isMobile ? '0.875rem' : '1rem',
      marginBottom: isMobile ? '0.75rem' : '1.25rem',
      color: theme === 'light' ? '#4B5563' : '#D1D5DB'
    },
    controls: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'stretch' : 'center',
      marginBottom: '1.5rem',
      gap: isMobile ? '0.75rem' : '0'
    },
    controlButtons: {
      display: 'flex',
      gap: '0.5rem',
      width: isMobile ? '100%' : 'auto'
    },
    controlOptions: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'stretch' : 'center',
      gap: isMobile ? '0.5rem' : '0.5rem'
    }
  };

  // Add some custom keyframe animations
  const keyframes = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes slideDown {
      0% { opacity: 0; transform: translateY(-1rem); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>
      
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>{t.title}</h1>
          <p style={styles.tagline}>{t.tagline}</p>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          width: isMobile ? '100%' : 'auto',
          justifyContent: isMobile ? 'space-between' : 'flex-end',
          marginTop: isMobile ? '0.5rem' : '0'
        }}>
          <div>
            <label style={{ marginRight: '0.5rem' }}>{t.language}:</label>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              style={styles.languageSelect}
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="it">Italiano</option>
              <option value="es">Español</option>
            </select>
          </div>
          <button 
            onClick={toggleTheme} 
            style={{
              ...styles.button,
              marginLeft: '1rem',
              padding: isMobile ? '0.375rem 0.75rem' : '0.5rem 1rem',
              backgroundColor: theme === 'light' ? '#1F2937' : '#F3F4F6',
              color: theme === 'light' ? '#F3F4F6' : '#1F2937',
              fontSize: isMobile ? '0.75rem' : '0.875rem'
            }}
          >
            {theme === 'light' ? `🌙 ${t.darkMode}` : `☀️ ${t.lightMode}`}
          </button>
        </div>
      </header>

      {!gameRunning && drawnNumbers.length === 0 && (
        <div style={styles.callToAction}>
          <h2 style={styles.ctaHeading}>{t.joinNow}</h2>
          <p style={styles.ctaText}>{t.callFriends}</p>
        </div>
      )}

      <main style={styles.content}>
        {/* Game controls */}
        <div style={styles.controls}>
          <div style={styles.controlButtons}>
            <button 
              onClick={startGame} 
              disabled={gameRunning}
              style={{
                ...styles.button,
                ...styles.primaryButton,
                ...(gameRunning ? styles.disabledButton : {}),
                flex: isMobile ? '1' : 'initial'
              }}
            >
              {t.startGame}
            </button>
            <button 
              onClick={stopGame} 
              disabled={!gameRunning}
              style={{
                ...styles.button,
                ...styles.dangerButton,
                ...(!gameRunning ? styles.disabledButton : {}),
                flex: isMobile ? '1' : 'initial'
              }}
            >
              {t.stopGame}
            </button>
          </div>
          
          <div style={styles.controlOptions}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label>{t.players}:</label>
              <select 
                value={playerCount} 
                onChange={(e) => setPlayerCount(Number(e.target.value))}
                style={{
                  ...styles.languageSelect,
                  width: isMobile ? '100%' : 'auto'
                }}
                disabled={gameRunning}
              >
                {[1, 2, 3, 5, 10, 20].map(count => (
                  <option key={count} value={count}>{count}</option>
                ))}
              </select>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              marginLeft: isMobile ? '0' : '1rem' 
            }}>
              <label>{t.speed}:</label>
              <select 
                value={drawInterval} 
                onChange={(e) => setDrawInterval(Number(e.target.value))}
                style={{
                  ...styles.languageSelect,
                  width: isMobile ? '100%' : 'auto'
                }}
                disabled={gameRunning}
              >
                <option value={1000}>{t.fast}</option>
                <option value={3000}>{t.normal}</option>
                <option value={5000}>{t.slow}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Game status */}
        <div style={styles.gameStatusCard}>
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between', 
            alignItems: isMobile ? 'center' : 'flex-start',
            gap: isMobile ? '1rem' : '0'
          }}>
            <div>
              <h2 style={{ 
                fontSize: isMobile ? '1.25rem' : '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: colors.primary,
                textAlign: isMobile ? 'center' : 'left'
              }}>
                {!gameRunning && drawnNumbers.length === 0 && t.welcome}
                {!gameRunning && drawnNumbers.length > 0 && t.gamePaused}
                {gameRunning && t.drawingInProgress}
              </h2>
              <p style={{ 
                fontSize: isMobile ? '1rem' : '1.125rem',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                {gameRunning 
                  ? `${t.numbersDrawn}: ${drawnNumbers.length}/75` 
                  : t.clickToStart}
              </p>
              <p style={{ 
                marginTop: '0.5rem', 
                fontSize: '0.875rem', 
                color: theme === 'light' ? '#6B7280' : '#9CA3AF',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                {t.autoMarkInfo}
              </p>
            </div>
            
            {lastNumber && (
              <div style={styles.lastDrawnNumber}>
                {lastNumber}
              </div>
            )}
          </div>
          
          {winners.length > 0 && (
            <div style={styles.winnerAlert}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                {t.weHaveWinner}
              </h3>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {winners.map(winner => (
                  <li key={winner} style={{ padding: '0.25rem 0' }}>
                    {winner === "you" ? t.youWon : `${allCards.find(p => p.id === winner)?.name} ${t.playerWon}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem' 
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            flexWrap: 'wrap', 
            gap: isMobile ? '1rem' : '2rem' 
          }}>
            {/* Player's card */}
            <div style={{ 
              flex: '1', 
              minWidth: isMobile ? '100%' : '300px' 
            }}>
              <div style={styles.card}>
                <h2 style={{
                  ...styles.cardHeader,
                  textAlign: isMobile ? 'center' : 'left',
                  justifyContent: isMobile ? 'center' : 'flex-start'
                }}>{t.yourCard}</h2>
                <div style={styles.bingoCard}>
                  {/* BINGO header */}
                  {['B', 'I', 'N', 'G', 'O'].map(letter => (
                    <div key={letter} style={styles.bingoHeader}>
                      {letter}
                    </div>
                  ))}
                  
                  {/* Card numbers */}
                  {playerCard.B && Array(5).fill().map((_, rowIndex) => (
                    ['B', 'I', 'N', 'G', 'O'].map(letter => {
                      const number = playerCard[letter][rowIndex];
                      const isMarked = markedNumbers.includes(number) || number === "FREE";
                      return (
                        <div 
                          key={`${letter}-${rowIndex}`} 
                          style={{
                            ...styles.bingoCell,
                            backgroundColor: isMarked ? themeStyles.highlight : 'transparent',
                            color: isMarked ? '#000000' : themeStyles.text,
                            borderColor: isMarked ? themeStyles.highlight : theme === 'light' ? '#D1D5DB' : '#4B5563'
                          }}
                        >
                          {number}
                        </div>
                      );
                    })
                  ))}
                </div>
              </div>
            </div>

            {/* Drawn numbers */}
            <div style={{ 
              flex: '1', 
              minWidth: isMobile ? '100%' : '300px' 
            }}>
              <div style={styles.card}>
                <h2 style={{
                  ...styles.cardHeader,
                  textAlign: isMobile ? 'center' : 'left',
                  justifyContent: isMobile ? 'center' : 'flex-start'
                }}>{t.drawnNumbers}</h2>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: isMobile ? '0.25rem' : '0.5rem', 
                  padding: isMobile ? '0.25rem' : '0.5rem',
                  justifyContent: isMobile ? 'center' : 'flex-start'
                }}>
                  {drawnNumbers.length === 0 ? (
                    <p style={{ 
                      color: theme === 'light' ? '#6B7280' : '#9CA3AF',
                      textAlign: 'center',
                      width: '100%'
                    }}>{t.noNumbersDrawn}</p>
                  ) : (
                    drawnNumbers
                      .slice()
                      .sort((a, b) => a - b)
                      .map(number => (
                        <div 
                          key={number} 
                          style={{
                            ...styles.drawnNumber,
                            backgroundColor: markedNumbers.includes(number) ? themeStyles.highlight : theme === 'light' ? '#E5E7EB' : '#374151',
                            color: markedNumbers.includes(number) ? '#000000' : themeStyles.text
                          }}
                        >
                          {number}
                        </div>
                      ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Other players */}
          <div style={styles.card}>
            <h2 style={{
              ...styles.cardHeader,
              textAlign: isMobile ? 'center' : 'left',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>{t.otherPlayers}</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile 
                ? isSmallScreen 
                  ? 'repeat(auto-fill, minmax(140px, 1fr))' 
                  : 'repeat(auto-fill, minmax(180px, 1fr))' 
                : 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: isMobile ? '0.5rem' : '1rem' 
            }}>
              {allCards.map(player => (
                <div 
                  key={player.id} 
                  style={{
                    ...styles.playerCard,
                    ...(winners.includes(player.id) ? styles.playerWinner : {})
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    marginBottom: '0.5rem' 
                  }}>
                    <h3 style={{ 
                      fontWeight: 'bold', 
                      fontSize: isMobile ? '0.875rem' : '1rem' 
                    }}>{player.name}</h3>
                    <span style={{ 
                      fontSize: isMobile ? '0.75rem' : '0.875rem' 
                    }}>
                      {player.marked.length - 1} / 75 {isMobile ? '' : t.numbersMarked}
                    </span>
                  </div>
                  <div style={styles.progressBar}>
                    <div 
                      style={{
                        ...styles.progressFill,
                        width: `${((player.marked.length - 1) / 24) * 100}%`,
                        backgroundColor: winners.includes(player.id) ? '#FFFFFF' : colors.primary
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 {t.title} - {t.allRightsReserved}</p>
      </footer>
    </div>
  );
};

export default BingoGame;