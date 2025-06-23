import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import {schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")


// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday 
selectedDate.min = inputToday 

form.onsubmit = async (event) => {
  // Previne o carregamento da página
  event.preventDefault()

  try {
    // Recupera o nome do Cliente
    const name =  clientName.value.trim()
    
    if (!name){
      return alert("Informe o nome do cliente")
    }

    // Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected")

    // Recuperando o horário selecionado.
    if(!hourSelected) {
      return alert("Selecione a hora.")
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")
    
    // Insere a hora com a data
    const when = dayjs(selectedDate.value).add(hour, "hour")
    
    // Gera ID e converte para string
    const id = String(new Date().getTime())

    // Faz os agendamentos enviando as informações para API
    await scheduleNew({
      id,
      name,
      when,
    })

    // Regarrega os agendamentos
    await schedulesDay()

    // Limpa o input de nome do cliente
    clientName.value = ""


  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    
  }
}