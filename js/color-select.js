const colorRadioGroup = document.getElementsByName('color');
const colorfulDiv = document.getElementById('colorful-div');

for (let i = 0; i < colorRadioGroup.length; i++) {
  colorRadioGroup[i].addEventListener('change', function() {
    if (this.checked) {
      colorfulDiv.style.backgroundColor = this.value;
    }
  });
}



/* <label>Choose a color:</label>
<div>
  <label><input type="radio" name="color" value="red"> Red</label>
  <label><input type="radio" name="color" value="green"> Green</label>
  <label><input type="radio" name="color" value="blue"> Blue</label>
</div>

<div id="colorful-div">This div will change its color based on your selection.</div> */

/* <i class="fa fa-caret-down" aria-hidden="true"></i> */