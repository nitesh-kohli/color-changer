# color-changer
This is a color changer project - a basic level project to learn javascript

# steps to build this basic project
## in HTML
1.) create a div element in body.<br/>
2.) create 4 span tag in div element you have created earlier.<br/>
3.) give class and id to these span elements.<br/>
4.) class to make the buttons and id for the colors.<br/>

## in JAVASCRIPT
1.) select buttons using querySelectorAll because we need buttons for click event.<br/>
2.) select body using querySelector because we need to change background-color of body.<br/>
3.) Now, for each button there must be an eventListener so that when we click on button we get event e from that button.<br/>
4.) Now check e.target.id == 'color' and change body's background color = color or e.target.id.<br/>
5.) two methods to check and change background color:-<br/>
    i) if statement.<br/>
    ii) switch statement.<br/>

