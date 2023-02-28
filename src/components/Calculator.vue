<script>
export default {
  name: "Calculator",

  data() {
    return {
      firstDigit: "",
      secondDigit: "",
      result: "",
      operator: "",
      validaFirstDigit: true,
      validaSecondDigit: true,
     
    };
  },
  methods: {
    calculate() {
      const regex = new RegExp(/^\d+\.?\d*$/);
      if (regex.test(this.firstDigit)) {
        this.validaFirstDigit = true;
      }
      if (regex.test(this.secondDigit)) {
        this.validaSecondDigit = true;
      }
      if (regex.test(this.firstDigit) && regex.test(this.secondDigit)) {
        this.validaFirstDigit = true;
        this.validaSecondDigit = true;
        let result = "";
        switch (this.operator) {
          case "+":
            result =
              Number.parseFloat(this.firstDigit) +
              Number.parseFloat(this.secondDigit);
            break;
          case "-":
            result =
              Number.parseFloat(this.firstDigit) -
              Number.parseFloat(this.secondDigit);
            break;
          case "/":
            if (this.secondDigit == 0) {
              result = "Division by zero is not allowed!";
            } else {
              result =
                Number.parseFloat(this.firstDigit) /
                Number.parseFloat(this.secondDigit);
            }

            break;
          case "*":
            result =
              Number.parseFloat(this.firstDigit) *
              Number.parseFloat(this.secondDigit);
            break;
          case "%":
            if (this.secondDigit == 0) {
              result = "Division by zero is not allowed!";
            } else {
              result =
                Number.parseFloat(this.firstDigit) %
                Number.parseFloat(this.secondDigit);
            }
            break;
          case "**":
            result =
              Number.parseFloat(this.firstDigit) **
              Number.parseFloat(this.secondDigit);
            break;
        }
        this.result = result;
      } else {
        this.result = "";
        if (!regex.test(this.firstDigit)) {
          this.validaFirstDigit = false;
        }
        if (!regex.test(this.secondDigit)) {
          this.validaSecondDigit = false;
        }
      }
    },
  },
};
</script>

<template>
  <section class="container mt-5 p-5 rounded">
    <form class="form-control">
      <fieldset>
        <legend class="text-center">Arithmetic calculator</legend>
        <div>
          <label>First Digit </label>
          <div class="d-flex">
            <input
              class="form-control w-75"
              type="text"
              v-model="firstDigit"
              @keyup="calculate"
            />
            <span class="pt-2 w-25" v-if="!validaFirstDigit">Invalid Digit!</span>
          </div>
        </div>
        <div>
          <label>Second Digit</label>
          <div class="d-flex">
            <input
              class="form-control w-75"
              type="text"
              v-model="secondDigit"
              @keyup="calculate"
            />
            <span class="pt-2 w-25 text-rigth" v-if="!validaSecondDigit">Inválid Digit!</span>
          </div>
        </div>

        <div>
          <label> Result</label>
          <input class="form-control w-75" type="text" v-model="result" readonly />
        </div>
        <div class="mt-3">
          <label for="calculato" class="form-label">Select Operator:</label>
          <select id="calculator-operator" class="form-select w-50 text-center" aria-label="Default select example" v-model="operator" @change="calculate">
            <option value="+">Addition</option>
            <option value="-">Subtraction</option>
            <option value="/">Division</option>
            <option value="*">Multiplication</option>
            <option value="%">Remainder</option>
            <option value="**">Power</option>
          </select>
        </div>
        
      </fieldset>
    </form>
  </section>
</template>

<style>
.container {
  max-width: 550px !important;
  background-color: #0B151C;
}
form {
  height: 25rem;
 
}
input,
select {
  background-color: #0B151C !important;
  color: white !important;
  text-align: right;
  
}

span {
  text-align: right !important;
  color: red;
 
}

</style>
