void addElemento(DataBase **dataB, Conjunto &intero){
      if(*dataB == NULL){
              printf("\nAdicionando Primeiro Conjunto ao DataBase...\n");
              *dataB = alocaPosicao(intero);
      }
      else
      {
          DataBase* dataAux = *dataB;
          if (dataAux->prox == NULL){
             dataAux->prox = alocaPosicao(intero);
          }
          else
          {
             DataBase* aux = dataAux;
             while (aux->prox != NULL)
             {
                 aux = aux->prox;
             }
             aux->prox = alocaPosicao(intero);
          }
      }
}