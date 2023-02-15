const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  stunding: ["01-01", "01-02", "01-06"],
  water: ["01-04", "01-05"],
  food: ["01-01", "01-03"],
  run: ["01-01", "01-02", "01-06"],
  game: ["01-01", "01-02", "01-06"],
  gym: ["01-01", "01-02", "01-06"],
}

nlwSetup.setData(data)
nlwSetup.load()
