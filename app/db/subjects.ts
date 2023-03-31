export type SubjectColors =
  | "orange"
  | "sky"
  | "yellow"
  | "purple"
  | "pink"
  | "red"
  | "green"
  | "slate";

type Subject = {
  name: string;
  type: "optative" | "must-do";
  color: SubjectColors;

  old?: {
    name: string;
    type: "optative" | "must-do";
  };
};

type Semester = {
  name: string;
  subjects: Subject[];
};

const getOptative = (n: number): Subject => {
  return {
    name: `Optativa ${n}`,
    type: "optative",
    color: "slate",
  };
};

const semesters: Semester[] = [
  {
    name: "1º Semestre",
    subjects: [
      {
        name: "Fundamentos de Cálculo",
        type: "must-do",
        color: "orange",

        old: {
          name: "Matemática Basica",
          type: "must-do",
        },
      },
      {
        name: "Algorítmos e Programação",
        type: "must-do",
        color: "sky",

        old: {
          name: "Técnicas de Programação I",
          type: "must-do",
        },
      },
      {
        name: "Informação e Sociedade",
        type: "must-do",
        color: "yellow",
      },
      {
        name: "Interação Humano-Computador",
        type: "must-do",
        color: "yellow",
      },
      {
        name: "Fundamentos de Sistemas de Informação",
        type: "must-do",
        color: "yellow",
      },
      {
        name: "Arquitetura de Computadores",
        type: "must-do",
        color: "red",

        old: {
          name: "Organização de Computadores",
          type: "must-do",
        },
      },
    ],
  },
  {
    name: "2º Semestre",
    subjects: [
      {
        name: "Álgebra Linear",
        type: "must-do",
        color: "orange",

        old: {
          name: "Álgebra Linear",
          type: "must-do",
        },
      },
      {
        name: "Cálculo Diferencial e Integral I",
        type: "must-do",
        color: "orange",

        old: {
          name: "Cálculo Diferencial e Integral I",
          type: "must-do",
        },
      },
      {
        name: "Introdução à Lógica de Computacional",
        type: "must-do",
        color: "sky",

        old: {
          name: "Introdução à Lógica de Computacional",
          type: "must-do",
        },
      },
      {
        name: "Técnicas de Programação",
        type: "must-do",
        color: "sky",

        old: {
          name: "Técnicas de Programação II",
          type: "must-do",
        },
      },
      {
        name: "Projeto Integrador I",
        type: "must-do",
        color: "yellow",

        old: {
          name: "Técnicas de Programação I",
          type: "must-do",
        },
      },
      {
        name: "Gestão de Processos de Negócios",
        type: "must-do",
        color: "pink",
      },
      {
        name: "Fundamentos de Gestão Organizacional",
        type: "must-do",
        color: "pink",

        old: {
          name: "Análise Empresarial e Administrativa",
          type: "must-do",
        },
      },
    ],
  },
  {
    name: "3º Semestre",
    subjects: [
      {
        name: "Cálculo Diferencial e Integral II",
        type: "must-do",
        color: "orange",

        old: {
          name: "Cálculo Diferencial e Integral II",
          type: "must-do",
        },
      },
      {
        name: "Linguagens de Programação e Paradigmas",
        type: "must-do",
        color: "sky",

        old: {
          name: "Linguagens Formais e Autômatos",
          type: "must-do",
        },
      },
      {
        name: "Estrutura de Dados",
        type: "must-do",
        color: "sky",

        old: {
          name: "Estrutura de Dados I",
          type: "must-do",
        },
      },
      {
        name: "Modelagem da Informação",
        type: "must-do",
        color: "green",

        old: {
          name: "Banco de Dados I",
          type: "must-do",
        },
      },
      {
        name: "Análise e Projeto de Sistemas",
        type: "must-do",
        color: "purple",

        old: {
          name: "Análise de Sistemas",
          type: "must-do",
        },
      },
      {
        name: "Sistemas Operacionais",
        type: "must-do",
        color: "red",

        old: {
          name: "Sistemas Operacionais",
          type: "must-do",
        },
      },
    ],
  },
  {
    name: "4º Semestre",
    subjects: [
      {
        name: "Probabilidade",
        type: "must-do",
        color: "orange",

        old: {
          name: "Probabilidade",
          type: "must-do",
        },
      },
      {
        name: "Projeto e Análise de Algoritmos",
        type: "must-do",
        color: "sky",

        old: {
          name: "Análise de Algoritmos",
          type: "must-do",
        },
      },
      {
        name: "Armazenamento e Gestão de Dados",
        type: "must-do",
        color: "green",

        old: {
          name: "Banco de Dados II",
          type: "must-do",
        },
      },
      {
        name: "Projeto Integrador II",
        type: "must-do",
        color: "yellow",
      },
      {
        name: "Engenharia de Software I",
        type: "must-do",
        color: "purple",

        old: {
          name: "Projeto e Construção de Sistemas",
          type: "must-do",
        },
      },
      {
        name: "Redes de Computadores",
        type: "must-do",
        color: "red",

        old: {
          name: "Redes I",
          type: "must-do",
        },
      },
    ],
  },
  {
    name: "5º Semestre",
    subjects: [
      {
        name: "Estatística",
        type: "must-do",
        color: "orange",

        old: {
          name: "Estatística",
          type: "must-do",
        },
      },
      {
        name: "Metodologia Cientítifica e Tecnológica",
        type: "must-do",
        color: "yellow",
      },
      {
        name: "Engenharia de Software II",
        type: "must-do",
        color: "purple",

        old: {
          name: "Programação Modular",
          type: "must-do",
        },
      },
      {
        name: "Gerência de Projetos",
        type: "must-do",
        color: "purple",
      },
      {
        name: "Governança de Tecnologia da Informação",
        type: "must-do",
        color: "pink",
      },
    ],
  },
  {
    name: "6º Semestre",
    subjects: [
      {
        name: "Ciência dos Dados",
        type: "must-do",
        color: "green",
      },
      {
        name: "Empreendedorismo",
        type: "must-do",
        color: "pink",

        old: {
          name: "Empreendedorismo",
          type: "must-do",
        },
      },
      getOptative(1),
      getOptative(2),
      getOptative(3),
    ],
  },
  {
    name: "7º Semestre",
    subjects: [
      {
        name: "Projeto de Graduação I",
        type: "must-do",
        color: "slate",

        old: {
          name: "Projeto de Graduação I",
          type: "must-do",
        },
      },
      getOptative(4),
      getOptative(5),
      getOptative(6),
      getOptative(7),
    ],
  },
  {
    name: "8º Semestre",
    subjects: [
      {
        name: "Projeto de Graduação II",
        type: "must-do",
        color: "slate",

        old: {
          name: "Projeto de Graduação II",
          type: "must-do",
        },
      },
      getOptative(8),
      getOptative(9),
      getOptative(10),
    ],
  },
];

export default semesters;
