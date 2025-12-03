// Obtém o elemento de saída
const outputDivMatrizes = document.getElementById('output_matrizes');

// --- Funções Auxiliares ---

// Gera uma matriz de R linhas e C colunas com números inteiros aleatórios
function gerarMatriz(R, C, maxVal = 10) {
    const matriz = [];
    for (let i = 0; i < R; i++) {
        matriz[i] = [];
        for (let j = 0; j < C; j++) {
            // Gera um número inteiro entre 1 e maxVal
            matriz[i][j] = Math.floor(Math.random() * maxVal) + 1; 
        }
    }
    return matriz;
}

// Converte a matriz para um formato HTML amigável
function matrizParaHTML(matriz, titulo = "Matriz:") {
    let html = `<strong>${titulo}</strong>\n<div class="matriz-display">`;
    for (let i = 0; i < matriz.length; i++) {
        html += matriz[i].join(" | ") + "\n";
    }
    html += "</div>";
    return html;
}

// Função principal para executar o exercício
function executarExercicioMatrizes(numero) {
    let titulo = `Resultado do Exercício ${numero} (Matrizes): `;
    let resultado = "";

    switch (numero) {
        case 1:
            resultado = exercicio1_matrizes();
            break;
        case 2:
            resultado = exercicio2_matrizes();
            break;
        case 3:
            resultado = exercicio3_matrizes();
            break;
        case 4:
            resultado = exercicio4_matrizes();
            break;
        case 5:
            resultado = exercicio5_matrizes();
            break;
        case 6:
            resultado = exercicio6_matrizes();
            break;
        case 7:
            resultado = exercicio7_matrizes();
            break;
        case 8:
            resultado = exercicio8_matrizes();
            break;
        case 9:
            resultado = exercicio9_matrizes();
            break;
        case 10:
            resultado = exercicio10_matrizes();
            break;
        case 11:
            resultado = exercicio11_matrizes();
            break;
        case 12:
            resultado = exercicio12_matrizes();
            break;
        case 13:
            resultado = exercicio13_matrizes();
            break;
        case 14:
            resultado = exercicio14_matrizes();
            break;
        case 15:
            resultado = exercicio15_matrizes();
            break;
        default:
            resultado = "Exercício não encontrado.";
    }

    outputDivMatrizes.innerHTML = `${titulo}\n\n${resultado}`;
}

// --- Funções de Resolução (Matrizes) ---

// 1) Leia uma matriz 3x3 de números inteiros e exiba a matriz na tela.
function exercicio1_matrizes() {
    const matriz = gerarMatriz(3, 3);
    return matrizParaHTML(matriz, "Matriz 3x3 Gerada:");
}

// 2) Leia uma matriz 2x2 de números inteiros e calcule a soma de todos os elementos.
function exercicio2_matrizes() {
    const matriz = gerarMatriz(2, 2);
    let soma = 0;
    
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            soma += matriz[i][j];
        }
    }
    
    return matrizParaHTML(matriz, "Matriz 2x2:") + `\nA soma de todos os elementos é: <strong>${soma}</strong>`;
}

// 3) Crie um programa que leia uma matriz 3x3 de números inteiros e exiba a soma dos elementos da diagonal principal.
function exercicio3_matrizes() {
    const matriz = gerarMatriz(3, 3);
    let somaDiagonal = 0;
    
    // A diagonal principal é onde i == j
    for (let i = 0; i < 3; i++) {
        somaDiagonal += matriz[i][i];
    }
    
    return matrizParaHTML(matriz, "Matriz 3x3:") + `\nA soma da Diagonal Principal é: <strong>${somaDiagonal}</strong>`;
}

// 4) Leia duas matrizes 2x2 de números inteiros e exiba a soma das duas matrizes.
function exercicio4_matrizes() {
    const R = 2, C = 2;
    const matA = gerarMatriz(R, C);
    const matB = gerarMatriz(R, C);
    const matSoma = [];

    for (let i = 0; i < R; i++) {
        matSoma[i] = [];
        for (let j = 0; j < C; j++) {
            matSoma[i][j] = matA[i][j] + matB[i][j];
        }
    }
    
    return matrizParaHTML(matA, "Matriz A:") + 
           matrizParaHTML(matB, "Matriz B:") + 
           matrizParaHTML(matSoma, "Matriz Soma (A + B):");
}

// 5) Leia uma matriz 3x3 de números inteiros e exiba o maior valor presente na matriz.
function exercicio5_matrizes() {
    const R = 3, C = 3;
    const matriz = gerarMatriz(R, C, 50); // Usando valor máximo maior para diversidade
    let maior = matriz[0][0];

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
            }
        }
    }
    
    return matrizParaHTML(matriz, "Matriz 3x3:") + `\nO maior valor na matriz é: <strong>${maior}</strong>`;
}

// 6) Leia uma matriz 4x4 de números inteiros e exiba a média aritmética dos elementos.
function exercicio6_matrizes() {
    const R = 4, C = 4;
    const matriz = gerarMatriz(R, C);
    let soma = 0;
    const totalElementos = R * C;

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            soma += matriz[i][j];
        }
    }
    
    const media = soma / totalElementos;
    
    return matrizParaHTML(matriz, "Matriz 4x4:") + 
           `\nSoma total: ${soma}\nTotal de elementos: ${totalElementos}\nA média aritmética é: <strong>${media.toFixed(2)}</strong>`;
}

// 7) Leia duas matrizes 2x2 de números inteiros e exiba o produto entre elas.
function exercicio7_matrizes() {
    const R = 2, C = 2;
    const matA = gerarMatriz(R, C);
    const matB = gerarMatriz(R, C);
    const matProduto = [[0, 0], [0, 0]]; // Inicializa a matriz resultado

    // Multiplicação de matrizes (A * B = P): P[i][j] = Soma(A[i][k] * B[k][j])
    for (let i = 0; i < R; i++) { // Linha de A
        for (let j = 0; j < C; j++) { // Coluna de B
            for (let k = 0; k < R; k++) { // Coluna de A / Linha de B
                matProduto[i][j] += matA[i][k] * matB[k][j];
            }
        }
    }

    return matrizParaHTML(matA, "Matriz A:") + 
           matrizParaHTML(matB, "Matriz B:") + 
           matrizParaHTML(matProduto, "Matriz Produto (A * B):");
}

// 8) Leia uma matriz 3x3 de números inteiros e exiba o menor valor presente na matriz.
function exercicio8_matrizes() {
    const R = 3, C = 3;
    const matriz = gerarMatriz(R, C, 50);
    let menor = matriz[0][0];

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (matriz[i][j] < menor) {
                menor = matriz[i][j];
            }
        }
    }
    
    return matrizParaHTML(matriz, "Matriz 3x3:") + `\nO menor valor na matriz é: <strong>${menor}</strong>`;
}

// 9) Leia uma matriz 3x3 de números inteiros e verifique se ela é simétrica (igual à sua transposta).
function exercicio9_matrizes() {
    const R = 3, C = 3;
    // Geramos uma matriz para teste, se for simétrica, precisa ser manual
    const matriz = [
        [1, 4, 7],
        [4, 2, 5],
        [7, 5, 3] // Esta matriz é simétrica
    ];
    // const matriz = gerarMatriz(R, C); // Use esta linha para testar uma matriz aleatória
    
    let isSimetrica = true;
    for (let i = 0; i < R; i++) {
        for (let j = i + 1; j < C; j++) { // Compara apenas acima da diagonal (i < j)
            if (matriz[i][j] !== matriz[j][i]) {
                isSimetrica = false;
                break;
            }
        }
        if (!isSimetrica) break;
    }

    const mensagem = isSimetrica ? "É SIMÉTRICA (igual à sua transposta)." : "NÃO é simétrica.";
    
    return matrizParaHTML(matriz, "Matriz 3x3:") + `\nA matriz ${mensagem}`;
}

// 10) Leia uma matriz 4x4 de números inteiros e exiba a soma dos elementos de cada coluna.
function exercicio10_matrizes() {
    const R = 4, C = 4;
    const matriz = gerarMatriz(R, C);
    const somaColunas = Array(C).fill(0); // Array para armazenar a soma de cada coluna

    for (let j = 0; j < C; j++) { // Loop pelas colunas (j)
        for (let i = 0; i < R; i++) { // Loop pelas linhas (i)
            somaColunas[j] += matriz[i][j];
        }
    }
    
    return matrizParaHTML(matriz, "Matriz 4x4:") + 
           `\nSoma de cada Coluna:\n- Coluna 0: ${somaColunas[0]}\n- Coluna 1: ${somaColunas[1]}\n- Coluna 2: ${somaColunas[2]}\n- Coluna 3: ${somaColunas[3]}`;
}

// 11) Leia duas matrizes 2x2 de números inteiros e verifique se elas são iguais.
function exercicio11_matrizes() {
    const R = 2, C = 2;
    // Gerando matrizes que tendem a ser diferentes (a menos que a sorte ajude)
    const matA = gerarMatriz(R, C);
    // Para teste de igualdade: const matB = [...matA.map(arr => [...arr])];
    const matB = gerarMatriz(R, C); 

    let saoIguais = true;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (matA[i][j] !== matB[i][j]) {
                saoIguais = false;
                break;
            }
        }
        if (!saoIguais) break;
    }

    const mensagem = saoIguais ? "SÃO IGUAIS (elemento por elemento)." : "NÃO são iguais.";

    return matrizParaHTML(matA, "Matriz A:") + 
           matrizParaHTML(matB, "Matriz B:") + 
           `\nAs matrizes ${mensagem}`;
}

// 12) Leia uma matriz 3x3 de números inteiros e exiba o produto dos elementos da diagonal secundária.
function exercicio12_matrizes() {
    const R = 3, C = 3;
    const matriz = gerarMatriz(R, C, 5); // Usando valores menores para produto menor
    let produtoDiagonal = 1;

    // A diagonal secundária é onde i + j == R - 1 (ou 2, para 3x3)
    for (let i = 0; i < R; i++) {
        const j = R - 1 - i;
        produtoDiagonal *= matriz[i][j];
    }
    
    return matrizParaHTML(matriz, "Matriz 3x3:") + `\nO produto da Diagonal Secundária é: <strong>${produtoDiagonal}</strong>`;
}

// 13) Leia uma matriz 4x4 de números inteiros e exiba o maior valor presente em cada linha.
function exercicio13_matrizes() {
    const R = 4, C = 4;
    const matriz = gerarMatriz(R, C, 100);
    let resultado = "";

    for (let i = 0; i < R; i++) {
        let maiorLinha = matriz[i][0]; // Começa com o primeiro elemento da linha
        for (let j = 1; j < C; j++) {
            if (matriz[i][j] > maiorLinha) {
                maiorLinha = matriz[i][j];
            }
        }
        resultado += `- Linha ${i}: ${maiorLinha}\n`;
    }

    return matrizParaHTML(matriz, "Matriz 4x4:") + `\nMaiores valores por Linha:\n${resultado}`;
}

// 14) Leia uma matriz 3x3 de números inteiros e verifique se ela é uma matriz identidade.
function exercicio14_matrizes() {
    const R = 3, C = 3;
    // Matriz identidade de 3x3 para teste:
    const matrizIdentidade = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];
    // Para testar uma não-identidade: const matriz = gerarMatriz(R, C);
    const matriz = gerarMatriz(R, C, 2); 

    let isIdentidade = true;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            // Diagonal Principal deve ser 1 (i == j)
            if (i === j) {
                if (matriz[i][j] !== 1) {
                    isIdentidade = false;
                    break;
                }
            } 
            // Outros elementos devem ser 0 (i !== j)
            else { 
                if (matriz[i][j] !== 0) {
                    isIdentidade = false;
                    break;
                }
            }
        }
        if (!isIdentidade) break;
    }

    const mensagem = isIdentidade ? "É uma MATRIZ IDENTIDADE." : "NÃO é uma matriz identidade.";
    
    return matrizParaHTML(matriz, "Matriz 3x3:") + `\nA matriz ${mensagem}`;
}

// 15) Leia duas matrizes 2x2 de números inteiros e exiba a subtração entre elas.
function exercicio15_matrizes() {
    const R = 2, C = 2;
    const matA = gerarMatriz(R, C);
    const matB = gerarMatriz(R, C);
    const matSub = [];

    for (let i = 0; i < R; i++) {
        matSub[i] = [];
        for (let j = 0; j < C; j++) {
            matSub[i][j] = matA[i][j] - matB[i][j];
        }
    }
    
    return matrizParaHTML(matA, "Matriz A:") + 
           matrizParaHTML(matB, "Matriz B:") + 
           matrizParaHTML(matSub, "Matriz Subtração (A - B):");
}