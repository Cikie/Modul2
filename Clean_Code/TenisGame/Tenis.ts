export class TennisGame {
    score: string = '';

    getScore(player1Name: string,
             player2Name: string,
             player1Score: number,
             player2Score: number) {
        let tempScore = 0;

        if (player1Score == player2Score) {
            switch (player1Score) {
                case 0:
                    this.score = "Love-All";
                    break;
                case 1:
                    this.score = "Fifteen-All";
                    break;
                case 2:
                    this.score = "Thirty-All";
                    break;
                case 3:
                    this.score = "Forty-All";
                    break;
                default:
                    this.score = "Deuce";
                    break;

            }
        } else {
            let matchPoint = player1Score >= 4 || player2Score >= 4;
            if (matchPoint) {
                let minusResult = player1Score - player2Score;
                let draw = minusResult == 1;
                if (draw) this.score = "Advantage player1";
                else {
                    let player1Lose = minusResult == -1;
                    if (player1Lose) this.score = "Advantage player2";
                    else {
                        let player2Lose = minusResult >= 2;
                        if (player2Lose) this.score = "Win for player1";
                        else this.score = "Win for player2";
                    }
                }
            } else {
                for (let i = 1; i < 3; i++) {
                    if (i == 1) tempScore = player1Score;
                    else {
                        this.score += "-";
                        tempScore = player2Score;
                    }
                    switch (tempScore) {
                        case 0:
                            this.score += "Love";
                            break;
                        case 1:
                            this.score += "Fifteen";
                            break;
                        case 2:
                            this.score += "Thirty";
                            break;
                        case 3:
                            this.score += "Forty";
                            break;
                    }
                }
            }
        }
    }
}