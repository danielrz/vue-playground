<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="onQuoteAdded"></app-new-quote>
        <app-quote-grid @quoteDeleted="onQuoteDeleted" :quotes='quotes'></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it</div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Header from './components/Header.vue';
export default {
    data() {
        return {
            maxQuotes: 10,
            quotes: [
                'the default quote'
            ]
        }
    },
    components: {
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote,
        appHeader: Header
    },
    methods: {
        onQuoteAdded(quote) {
            if (this.quotes.length === this.maxQuotes) {
                alert('you reached the maximum numberof quotes. please delete a quote first');
            }
            else {
                this.quotes.push(quote);
            }
        },
        onQuoteDeleted(index) {
            this.quotes.splice(index, 1);
        }
    }
}
</script>

<style>

</style>
