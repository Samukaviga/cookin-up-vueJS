export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) {
    //unknown é o tipo desconhecido, nao precisamos saber o tipo de dados da lista.
    // precisamos returnar um valor boleano para saber se os valores de lista1 estao em lista2
    
    //every retornar verdadeira somente se todos os itens da lista que foram passados no function forem verdadeiros
    return lista1.every((itemLista1) => lista2.includes(itemLista1)); //se o itemLista1 tiver incluso em lista2, retorna true


}