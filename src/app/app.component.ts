import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent
{
    currentEmojiIndex: number = 0;
    emoji = ['🎉', '😍', '😜', '👍'];
    
    get currentEmoji()
    {
        return this.emoji[this.currentEmojiIndex];
    }

    changeEmoji()
    {
        this.currentEmojiIndex++;
        if(this.currentEmojiIndex === this.emoji.length)
        {
            this.currentEmojiIndex = 0;
        }
    }
}