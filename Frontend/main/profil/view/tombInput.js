class TombInput {
  #adatok;
  #divElem;
  #inputok = [];

  constructor(adatok, szuloElem, osztaly) {
    this.#adatok = adatok;
    this.#divElem = szuloElem.find(".profilElemek");
    this.#divElem.addClass(osztaly);
    this.#init();
  }

  #init() {
    for (const key in this.#adatok) {
      switch (this.#adatok[key].tipus) {
        case "text":
          this.#inputok.push(new TextInput(key, this.#adatok[key], this.#divElem));
          break;
        case "password":
          this.#inputok.push(new PasswordInput(key, this.#adatok[key], this.#divElem));
          break;
      }
    }
  }

  showPasswordInputs() {
    this.#divElem.empty();

    const txt = `
      <input type="password" class="passwordInput" id="password1" name="password1" placeholder="Új jelszó">
      <input type="password" class="passwordInput" id="password2" name="password2" placeholder="Jelszó megerősítése">
      <button id="changePasswordBtn">Jelszó megváltoztatása</button>
    `;
    this.#divElem.append(txt);

    // Eseménykezelő hozzáadása a gombhoz
    const changePasswordBtn = this.#divElem.find("#changePasswordBtn");
    changePasswordBtn.on("click", () => {
      const newPassword1 = this.#divElem.find("#password1").val();
      const newPassword2 = this.#divElem.find("#password2").val();

      // Itt lehet végezni a jelszó validációját és további műveleteket
    });
  }

  showTextInput() {
    this.#divElem.empty(); 

    // A text inputokat hozzáadjuk a div elemhez
    const txt = `
      <input type="text" class="textInput" id="text1" name="text1" placeholder="Text 1">
      <input type="text" class="textInput" id="text2" name="text2" placeholder="Text 2">
      <button id="submitTextBtn">Submit</button>
    `;
    this.#divElem.append(txt);

    // Eseménykezelő hozzáadása a gombhoz
    const submitTextBtn = this.#divElem.find("#submitTextBtn");
    submitTextBtn.on("click", () => {
      // Itt végezheted el a szükséges műveleteket a szöveges adatokkal
      const text1Value = this.#divElem.find("#text1").val();
      const text2Value = this.#divElem.find("#text2").val();

      // Példa: kiírjuk az értékeket a konzolra
      console.log("Text 1:", text1Value);
      console.log("Text 2:", text2Value);
    });
  }
}

export default TombInput;
