import React from 'react';
import { DrawnNumbers } from './components/drawnNumbers.js';
import { CardHeader } from './components/cardHeader.js';
import { Card } from './components/card.js';
import { StartButton } from './components/startButton.js';
import { WinnersBoard } from './components/winnersBoard.js';
import { Competitors } from './components/competitors.js';
import { numberSounds } from './components/sounds.js';
import { MusicIcon } from './components/musicIcon.js';

export class Bingo extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            numberBase: this.generateNumberBase(),            
            startButtonDisabled: false,
            card: this.generateCard(this.generateNumberBase, this.getRandomNumber),
            competitors:  this.generateCompetitors(99),
            drawnNumbers: [],
            winnersLeft: 20,
            winners: [],
            musicOn: true,
            h2Text: 'Your 99 Competitors:'            
        }

        //variables        
        this.firstGame = true;
        this.timer;                
        this.startButton;
        this.beep = new Audio('../sound/beep.mp3');
        this.music = new Audio('../sound/music.mp3');
        this.music.loop = true;
        //this.music.play();        
        this.bingo = new Audio('../sound/bingo.mp3');
        

        //bind functions
        this.initiateGame = this.initiateGame.bind(this);
        this.generateNumberBase = this.generateNumberBase.bind(this);
        this.generateCard = this.generateCard.bind(this);
        this.getRandomNumber = this.getRandomNumber.bind(this);
        this.generateCompetitors = this.generateCompetitors.bind(this);
        this.startButtonClicked = this.startButtonClicked.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.drawNumber = this.drawNumber.bind(this);
        this.cellClicked = this.cellClicked.bind(this);
        this.markComnpetitorsCard = this.markComnpetitorsCard.bind(this);
        this.isWin = this.isWin.bind(this);                
        this.musicOnOff = this.musicOnOff.bind(this);
    }
    
    initiateGame() {        

        const numberBase = this.generateNumberBase();        
        const competitors = this.generateCompetitors(99);        
        const card = this.generateCard(this.generateNumberBase, this.getRandomNumber);            

        this.setState( { numberBase: numberBase, card : card, competitors: competitors, drawnNumbers: [], winnersLeft: 20, winners: [], h2Text: 'Your 99 Competitors:' } );
    }

    generateNumberBase() {
        let numberBase = [];

        for(let i = 0; i < 75; i++)
            numberBase.push( { number: i + 1, drawn: false } );
        
        return numberBase;
    }

    generateCard(generateNumberBase, getRandomNumber) {
        let ranges = [ { min: 1, max: 15 }, { min: 16, max: 30 }, { min: 31, max: 45 }, { min: 46, max: 60 }, { min: 61, max: 75 } ];
        let min = 1;
        let max = 2;
        let cell;
        let card = [];
        let column;
        let number;
        let numberBase = generateNumberBase();
        let validNumber;
        
        for(let i = 0; i < ranges.length; i++) {         

            column = [];
            number = 0;

            for(let j = 0; j < 5; j++) {
                
                validNumber = false;

                while(!validNumber) {
                    number = getRandomNumber(ranges[i].min, ranges[i].max);
                    if(!numberBase[number - 1].drawn)
                    {
                        numberBase[number - 1].drawn = true;
                        validNumber = true;
                    }
                }
                
                cell = { number: number, drawn: false };
                column.push(cell);
            }
            card.push(column);
        }
        
        return card;
    }

    getRandomNumber(min, max) {        
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateCompetitors(n) {
        const names = ['ivanhoe', 'igor', 'shrekked', 'drusilla', 'ely_mix', 'regolina', 'xbajt', 'fulvio', 'eel_the_reel', 'tumblr98', 'satan', 'veggieRod', 'danielaD', 'Frank_Relax', 'S-thief-in', 'smith87', 'michelle', 'izadora', 'lara15', 'luke13', 'aidan10', 'venere', 'goan', 'sloan', 'rileyR', 'hessem', 'rodorigo', 'gabirella', 'steve_deggie', 'reine', 'kabban', 'ebejer78', 'hoxna_wisq', 'pavarotti', 'shake_spear', 'michelangelo', 'rondo', 'julia', 'marika', 'veronica', 'shirleyT', 'graziella', 'vito85', 'orion', 'fest_the_best', 'cindy', 'kenshiro', 'takashi', 'venomD', 'drone', 'son_of_odin', 'mukabe', 'manson', 'ozzi', 'mcgregor', 'tyson', 'rita', 'bingo_lingo', 'nokin75', 'zven', 'rigoletto', 'aurora', 'dorianneAV', 'shelly', 'sharon', 'renegade', 'honda', 'yamahaDT', 'Jean-pierre', 'fleur', 'sophie', 'carmen', 'rosalind', 'rbex78', 'vassallo', 'flavz', 'debbieA', 'tribal89', 'yogi_smith', 'vertigo', 'julius', 'commodus', 'caligula', 'rin_tin_tin', 'rex76', 'chicagoFred', 'dorita', 'annabella', 'andreja', 'trixter', 'frans', 'joeDimech', 'salvadorD', 'picass', 'danube_girl', 'doris', 'dreamer', 'namaste', 'luke_ferris', 'sandra', 'jenny', 'lucienne', 'ambra'];
        let competitors = [];
        let name;
        let card;
        
        for(let i = 0; i < n; i++) {
            name = names.splice(this.getRandomNumber(0, names.length - 1), 1);            
            card = this.generateCard(this.generateNumberBase, this.getRandomNumber);
     
            competitors.push( { key: i, name: name, winner: false, card: card } );
        }
         
        return competitors;
    }

    startButtonClicked() {        
        
        this.music.volume = 0.1;

        this.timer = setInterval(this.drawNumber, 3000);                   
        
        this.setState( { startButtonDisabled: true });
                
        if(this.firstGame) 
            this.music.play();                         

        if(!this.firstGame)
            this.initiateGame();        
    }

    stopTimer() {
        clearTimeout(this.timer);    

        this.setState( { startButtonDisabled: false });    

        this.music.volume = 1.0;

        this.firstGame = false;        
    }

    drawNumber() {                  
        
        let numberBase = this.state.numberBase;
        let drawnNumbers = this.state.drawnNumbers;
        let validNumber = false;
        let number;
        let count = 0;
        let competitors = this.state.competitors.slice();
        let winnersLeft = this.state.winnersLeft;
        let winners = this.state.winners.slice();        

        while(!validNumber && count < numberBase.length) {
            number = this.getRandomNumber(1, 75);

            if(numberBase[number - 1].drawn === false) {
                numberBase[number - 1].drawn = true;
                validNumber = true;

                //populate the div above the card showing the last 5 numbers drawn
                if(drawnNumbers.length >= 5)
                    drawnNumbers.pop();
                drawnNumbers.splice(0, 0, number);

                numberSounds[number - 1].play();

                //check for competitor winners
                for(let i = 0; i < competitors.length; i++) {
                    
                    if(!competitors[i].winner) {

                        //mark competitors's cards with newly drawn number                        
                        competitors[i].card = this.markComnpetitorsCard(competitors[i].card, number);

                        //check if there are any winner competitors
                        if(this.isWin(competitors[i].card)) {                            
                            competitors[i].winner = true;
                            
                            winnersLeft--;

                            winners.push((winners.length + 1) + ". " + competitors[i].name[0]);
                            this.setState( { winnersLeft: winnersLeft, winners: winners } );

                            this.beep.play();             

                            if(winnersLeft === 0)   {
                                this.stopTimer();
                                break;
                            }
                        }
                    }
                }               
            }
            else {
                count++;                
            }            
        }
        
        this.setState( { numberBase: numberBase, drawnNumbers: drawnNumbers, competitors: competitors } );                        
        
    }

    cellClicked(number, column, row) {
        
        if(this.state.winnersLeft > 0) {

            let card = this.state.card;
            let winnersLeft = this.state.winnersLeft;
            let winners = this.state.winners.slice();

            if(this.state.numberBase[number - 1].drawn)
            {
                card[column][row].drawn = true;

                if(this.isWin(this.state.card)) {
                    winnersLeft--;
                    winners.push((winners.length + 1) + ". " + "guest");
                    this.stopTimer();
                    this.bingo.play();
                    this.setState( { h2Text: 'Bingo! You Win!!!' } );
                }
                
                this.setState( { card: card, winnersLeft: winnersLeft, winners: winners } );
            }

        }
    }

    markComnpetitorsCard(card, number) {
        
        let cardCopy = card;
        
        for(let i = 0; i < cardCopy.length; i++) {
            for(let j = 0; j < cardCopy[i].length; j++) {
                if(cardCopy[i][j].number === number) {                    
                    cardCopy[i][j].drawn = true;
                }
            }
        }
        
        return cardCopy;        
    }
    
    isWin(card) {
        
        //check columns
        for(let i = 0; i < card.length; i++)
            if(card[i][0].drawn && card[i][1].drawn && card[i][2].drawn && card[i][3].drawn && card[i][4].drawn) {                            
                return(true);
            }

        //check rows
        for(let i = 0; i < card[0].length; i++)
            if(card[0][i].drawn && card[1][i].drawn && card[2][i].drawn && card[3][i].drawn && card[4][i].drawn) {
                return(true);
            }
        
        //check diagonals    
        if(card[0][0].drawn && card[1][1].drawn && card[2][2].drawn && card[3][3].drawn && card[4][4].drawn) {
            return(true);
        }
    
        if(card[0][4].drawn && card[1][3].drawn && card[2][2].drawn && card[3][1].drawn && card[4][0].drawn) {
            return(true);
        }        
    }

    musicOnOff() {
        const musicOn = !this.state.musicOn;
        
        if(musicOn)
            this.music.play();
        else
            this.music.pause();

        this.setState( { musicOn } );
    }

    render () {
 
        return (
            <div className="bingo-global">                
                <h1>Bingo</h1>
                
                <div className="div-top">
                    <div className="div-game">
                        <DrawnNumbers drawnNumbers={this.state.drawnNumbers}/>
                        <CardHeader />
                        <Card card={this.state.card} cellClicked={this.cellClicked}/>
                        <StartButton disabled={this.state.startButtonDisabled} startButtonClicked={this.startButtonClicked}/>
                        <MusicIcon musicOn={this.state.musicOn} musicOnOff={this.musicOnOff} />
                    </div>
                    <WinnersBoard winnersLeft={this.state.winnersLeft} winners={this.state.winners}/>                    
                </div>

                <Competitors competitors={this.state.competitors} text={this.state.h2Text}/>
                
            </div>
        );
    }
}