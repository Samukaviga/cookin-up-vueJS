<script lang="ts">

import { textSpanOverlap } from 'typescript';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import Footer from './Footer.vue';


export default {
    data() {
        return {
            ingredientes: [] as string[],
        }
    },

    components: { SelecionarIngredientes, SuaLista, Footer },

    methods: {
        adicionarIngrediente(ingrediente: string) {
                
            this.ingredientes.push(ingrediente);
        
        },

        removerIngrediente(ingrediente: string) {
            
            const novo = this.ingredientes.filter(item => item !== ingrediente);
        
            this.ingredientes = novo;

        }
    }
}

</script>

<template>

    <main class="conteudo-principal">
        
        <SuaLista :ingredientes="ingredientes" />

        <SelecionarIngredientes 
            @adicionar-ingrediente="adicionarIngrediente($event)" 
            @remover-ingrediente="removerIngrediente($event)"
        />

    </main>


</template>

<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}


@mediaonly screenand (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@mediaonly screenand (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>