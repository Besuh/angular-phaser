import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { MainScene } from '../scenes/main';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    game: Phaser.Game;
    config: Phaser.Types.Core.GameConfig;

    constructor() {
        this.config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            },
            scene: [MainScene]
        }
    }
    ngOnInit() {
        this.game = new Phaser.Game(this.config);
    }

}
