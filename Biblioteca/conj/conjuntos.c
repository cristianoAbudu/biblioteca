
#include <stdlib.h>
#include <stdio.h>

typedef struct c{
        int elemento;
        struct c* prox;
}Conjunto;

typedef struct d{
		struct c* inicio;
		struct d* prox;
		int alias;
}DataBase;

/*Operações para os conjuntos:*/

Conjunto* alocaElemento(int i)
{
     Conjunto* novo = (Conjunto*)malloc(sizeof(Conjunto));
     if (novo != NULL)
     {
        novo->elemento = i;
        novo->prox = NULL; 
     }
     return novo;
}

int cardinalidade(Conjunto *conj)
{
    if (conj == NULL)
    {
        return 0;         
    }
    Conjunto *aux = conj;
    int tam = 1;
    while (aux->prox != NULL)
    {
          tam++;
          aux = aux->prox;
    }
    return tam;
}

void addElemento(Conjunto **conj, int intero){
      if(*conj == NULL){
              printf("\nAdicionando Primeiro Elemento ao Conjunto...\n");
              *conj = alocaElemento(intero);
      }
      else
      {
          Conjunto* conjA = *conj;
          if (conjA->prox == NULL){
             conjA->prox = alocaElemento(intero);
          }
          else
          {
             Conjunto* aux = conjA;
             while (aux->prox != NULL)
             {
                 aux = aux->prox;
             }
             aux->prox = alocaElemento(intero);
          }
      }
}

int pertinencia(Conjunto *conj, int intero)
/*  0 -> não pertence
/*  outro nº corresponde ao índice da primeira
    ocorrência de intero em conj, posição inicial=1
*/
{
    if (conj == NULL)
    {
        return 0;          
    }
    Conjunto *aux = conj;
    int indice = 1;
    while (aux->prox != NULL && aux->elemento != intero)
    {
        aux = aux->prox;
        indice++;
    }
    if (aux->elemento == intero)
    {
        return indice;
    }
    return 0;
}

int remElemento(Conjunto **conj, int intero)
/* 1 -> remoção realizada
// 0 -> elemento não pertence ao conjunto*/
{
     int indice = pertinencia(*conj, intero);
     if ( indice != 0 && indice != 1 )
     {
         int i = 1;
         Conjunto *aux = *conj;
         while (i != indice ) 
         {
               aux = aux->prox;
               i++;
         }
         aux->prox = aux->prox->prox;
         return 1;
     }
     if (indice == 1)
     {
        Conjunto *aux = *conj;
        aux->prox = NULL;
        return 1;
     }
     return 0;
}

void imprimeConjunto(Conjunto *conj){
     if (conj != NULL)
     {
         Conjunto* aux = conj;
         printf("\n[");
         while (aux != NULL)
         {
               printf(" %i ", aux->elemento);
               aux = aux->prox;
         }
         printf("]\n");
         
     }
     else
     {
         printf("\nConjunto vazio!\n\a");
     }
}

Conjunto* copia(Conjunto* a)
/*retorna uma cópia do conjunto a*/
{
    Conjunto *retorno, *auxA = a, *auxR;
    int tamanho = cardinalidade(a);
    retorno = alocaElemento(auxA->elemento);
    auxR = retorno;
    int i=0;
    while ( i<tamanho )
    {
        auxA = auxA->prox;
        auxR->prox = alocaElemento(auxA->elemento);
        auxR = auxR->prox;
        i++;
    }
    return retorno;
}

Conjunto* uniao(Conjunto* a, Conjunto *b)
{
     Conjunto *retorno = copia(a), *aux = b;
     int tamanho = cardinalidade(b), i=0;
     while (i<tamanho)
     {
         if ( pertinencia(retorno, aux->elemento) == 0)
         {
              addElemento(&retorno, aux->elemento);
         }
         aux = aux->prox;
         i++;
     }
     return retorno;
}

Conjunto* inter(Conjunto *a, Conjunto *b)
{
      if (a == NULL | b == NULL)
      {
          return NULL;
      }
      Conjunto *retorno = NULL, *aux = a;
      do
      {
            if (pertinencia(b, aux->elemento) != 0)
            {
                addElemento(&retorno, aux->elemento);
            }
            aux = aux->prox;
      }while (aux != NULL);
      return retorno;
}

/*Operações da base de conjuntos:*/

DataBase* alocaPosicao(Conjunto *c, DataBase *h)
{
     DataBase* novaPos = (DataBase*)malloc(sizeof(DataBase));
     if (novaPos != NULL)
     {
        novaPos->inicio = c;
        novaPos->prox = NULL;
        novaPos->alias = nConjuntos(h)+1;
     }
     return novaPos;
}

int nConjuntos(DataBase *d)
{
    if (d == NULL)
    {
        return 0;         
    }
    DataBase *aux = d;
    int tam = 1;
    while (aux->prox != NULL)
    {
          tam++;
          aux = aux->prox;
    }
    return tam;
}

void addConjunto(DataBase **dataB, Conjunto *intero){
      if(*dataB == NULL){
              printf("\nAdicionando Primeiro Conjunto ao DataBase...\n");
              *dataB = alocaPosicao(intero, *dataB);
      }
      else
      {
          DataBase* dataAux = *dataB;
          if (dataAux->prox == NULL){
             dataAux->prox = alocaPosicao(intero, *dataB);
          }
          else
          {
             DataBase* aux = dataAux;
             while (aux->prox != NULL)
             {
                 aux = aux->prox;
             }
             aux->prox = alocaPosicao(intero, *dataB);
          }
      }
}

Conjunto* achaConjunto(DataBase* d, int pos)
{
	if (d == NULL | nConjuntos(d) < pos)
	{
		return NULL;		
	}
	DataBase* aux = d;
	int i = 1;
	while (i!=pos)
	{
		aux = aux->prox;
		i++;		
	}
	Conjunto* retorno = aux->inicio;
	return retorno;
}

/*Telas:*/

void TelaLeConjunto(Conjunto *c)
{
	int tamanho, i = 0;
	printf("Entre com o numero de elementos do conjunto:");
	scanf("%i", tamanho);
	while (i<tamanho)
	{
	      int elemento;
              printf("Entre com o %d o elemento:", i);
              fflush(stdin);
	      scanf("%d", elemento);
	      addElemento(&c, elemento);
	      i++;
        }
}

void TelaIncluir(Conjunto *c)
{
	int elemento;
        printf("Digite o inteiro a ser inserido no conjunto: ");
        fflush(stdin);
        scanf("%d", elemento);
        addElemento(&c, elemento);
}

void TelaRemover(Conjunto *c)
{
	int elemento, OK;
	printf("Digite o inteiro a ser removido do conjunto, caso exista: ");
	fflush(stdin);
	scanf("%d", elemento);
	OK = remElemento(&c, elemento);
	if(OK==1)
	{
	   printf("Removido com sucesso!");
	}
	else
	{
	   printf("O numero %d nao pertence ao conjunto em questao.", elemento);
	}
}

void TelaPertinencia(Conjunto *c)
{
	int elemento, OK;
	printf("Digite o inteiro a ser procurado no conjunto: ");
	fflush(stdin);
	scanf("%d", elemento);
	OK = pertinencia(c, elemento);
	if (OK == 0)
	{
	    printf("Elemento nao pertencente ao conjunto em questao.");
	}
	else
	{
	    print("O elemento %d se encontra na posicao %d do conjunto em questao.", elemento, OK);
	}
}

void TelaCardinalidade(Conjunto *c)
{
	int tamanho = cardinalidade(c);
	printf("O conjunto em questao possui cardinalidade "+tamanho);
}

void TelaUniao(Conjunto *a, Conjunto *b)
{
	Conjunto* resultado = uniao(a,b);
	printf("Resultado da uniao dos conjuntos em questao: ");
	imprimeConjunto(resultado);
}

void TelaIntersec(Conjunto *a, Conjunto *b)
{
	Conjunto* resultado = inter(a,b);
	printf("Elementos comuns aos conjuntos em questao: ");
	imprimeConjunto(resultado);
}



void TelaMenuConj(Conjunto *c)
{
	int sel = -1;
	while(sel != 0){
		printf("Selecione uma opcao:");
		printf("\n1 - Exibir conteudo do conjunto");
		printf("\n2 - Incluir elemento no conjunto");
		printf("\n3 - Remover elemento do conjunto");
		printf("\n4 - Testar pertinencia de elemento ao conjunto");
		printf("\n5 - Unir com outro conjunto");
		printf("\n6 - Descobrir interseccao com outro conjunto");
		printf("\n7 - Mostrar cardinalidade do conjunto");
		printf("\n0 - Sair");
		fflush(stdin);
		scanf("%d", sel);
		switch (sel)
		{
			case 0	:	break;
			case 1	:	imprimeConjunto(c);
			case 2 	:	TelaIncluir(c);
			case 3	:	TelaRemover(c);
			case 4  :	TelaPertinencia(c);
			/*case 5	:   TelaUniao(c);
			case 6	:   TelaIntersec(c);*/
			case 7	:	TelaCardinalidade(c);
			default	:	printf("\nOpcao Invailida."); sel = -1;
       }
	}	
	
}

void TelaManipular(DataBase* lista)
{
	int index;
	printf("Digite o numero do conjunto a ser manipulado: ");
	fflush(stdin);
	scanf("%d", index);
	Conjunto *c = achaConjunto(lista, index);
	if (c!=NULL)
	{
		TelaMenuConj(c);
	}
	else
	{
		printf("\nConjunto nao encontrado!\a\n");
	}
}

void TelaInicial(DataBase* lista)
{
	printf("\nSegundo Projeto de Programação - Manipulaao de Conjuntos\n\n\n");
	int sel = -1;
	while (sel !=0)
	{
		printf("Selecione uma opcao:");
		printf("\n1 - Criar conjunto");
		printf("\n2 - Manipular conjunto existente");
		printf("\n0 - Sair");
		fflush(stdin);
		scanf("%d", sel);
		if (sel == 1)
		{
			addConjunto(&lista, NULL);
		}
		else
		{
			if (sel==2)
			{
				TelaManipular(lista);		
			}			
		}
	}
}

int main()
{
	//DataBase* lista;
	//TelaInicial(lista);
	//system("pause");
	return 0;
}
