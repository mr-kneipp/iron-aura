import { useState } from "react";

const treinos = {
  A: [
    {
      nome: "Supino inclinado com halteres",
      series: "4x8-10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Dumbbells/upper_chest/0031-dumbbells-upper_chest-front.gif",
    },
    {
      nome: "Crucifixo inclinado com halteres",
      series: "3x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Dumbbells/upper_chest/0032-dumbbells-upper_chest-front.gif",
    },
    {
      nome: "Desenvolvimento com halteres",
      series: "4x8",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Dumbbells/shoulders/0001-dumbbells-shoulders-front.gif",
    },
    {
      nome: "Elevação lateral com halteres",
      series: "3x12",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Dumbbells/shoulders/0002-dumbbells-shoulders-front.gif",
    },
    {
      nome: "Tríceps na polia com corda",
      series: "3x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Cables/triceps/0001-cables-triceps-front.gif",
    },
    {
      nome: "Tríceps banco com peso",
      series: "3x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Bodyweight/triceps/0001-bodyweight-triceps-front.gif",
    },
  ],
  B: [
    {
      nome: "Puxada alta na frente",
      series: "4x8-10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Cables/back/0001-cables-back-front.gif",
    },
    {
      nome: "Remada baixa com triangulo",
      series: "3x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Cables/back/0003-cables-back-front.gif",
    },
    {
      nome: "Remada unilateral com halter",
      series: "3x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Dumbbells/back/0001-dumbbells-back-front.gif",
    },
    {
      nome: "Rosca direta",
      series: "3x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Barbell/biceps/0001-barbell-biceps-front.gif",
    },
    {
      nome: "Rosca martelo",
      series: "3x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Dumbbells/biceps/0002-dumbbells-biceps-front.gif",
    },
    {
      nome: "Prancha + Elevação de pernas",
      series: "3x falha",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Bodyweight/abs/0003-bodyweight-abs-front.gif",
    },
  ],
  C: [
    {
      nome: "Leg press 45º",
      series: "4x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Machine/legs/0001-machine-legs-front.gif",
    },
    {
      nome: "Cadeira extensora",
      series: "3x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Machine/legs/0003-machine-legs-front.gif",
    },
    {
      nome: "Cadeira flexora",
      series: "3x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Machine/legs/0004-machine-legs-front.gif",
    },
    {
      nome: "Cadeira abdutora",
      series: "3x12",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Machine/legs/0012-machine-legs-front.gif",
    },
    {
      nome: "Glúteo na polia",
      series: "3x12",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Female/Cables/glutes/0002-cables-glutes-side.gif",
    },
    {
      nome: "Face pull",
      series: "3x15",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Cables/shoulders/0001-cables-shoulders-front.gif",
    },
  ],
  D: [
    {
      nome: "Supino inclinado na máquina",
      series: "4x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Machine/upper_chest/0001-machine-upper_chest-front.gif",
    },
    {
      nome: "Crucifixo cruzado no cabo alto",
      series: "3x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Cables/upper_chest/0003-cables-upper_chest-front.gif",
    },
    {
      nome: "Face pull",
      series: "3x12",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Cables/shoulders/0001-cables-shoulders-front.gif",
    },
    {
      nome: "Reverse fly na máquina",
      series: "3x12",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Machine/shoulders/0002-machine-shoulders-rear.gif",
    },
    {
      nome: "Ab wheel ou prancha com peso",
      series: "3x falha",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Bodyweight/abs/0007-bodyweight-abs-front.gif",
    },
    {
      nome: "Elevação de pernas",
      series: "3x12+",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Bodyweight/abs/0004-bodyweight-abs-front.gif",
    },
  ],
  E: [
    {
      nome: "Puxada neutra (triângulo)",
      series: "4x8",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Cables/back/0004-cables-back-front.gif",
    },
    {
      nome: "Remada unilateral na polia",
      series: "3x10",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Cables/back/0002-cables-back-front.gif",
    },
    {
      nome: "Pull-over com halteres",
      series: "3x12",
      imagem:
        "https://www.musclewiki.com/media/uploads/exercise-images/Male/Dumbbells/back/0003-dumbbells-back-front.gif",
    },
    {
      nome: "Rosca concentrada",
      series: "3x10",
      imagem:
