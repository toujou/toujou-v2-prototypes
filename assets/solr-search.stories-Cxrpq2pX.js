import{T as p}from"./badgeCustomConfig-oxGPBDYz.js";import{j as o}from"./jsx-runtime-DPda6Ybg.js";import{useMDXComponents as r}from"./index-4_AlzpT7.js";import{r as t}from"./_renderCardCategoriChips-D3lhH8UM.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";function s(e){const a={h1:"h1",...r(),...e.components};return o.jsx(a.h1,{id:"solr-search",children:"SOLR search"})}function u(e={}){const{wrapper:a}={...r(),...e.components};return a?o.jsx(a,{...e,children:o.jsx(s,{...e})}):s(e)}const v={title:"COMPONENTS/solr",parameters:{badges:[p.TESTING],docs:{page:u}},argTypes:{showMobileFilters:{table:{category:"Solr search settings"},name:"Show mobile filters",description:"Toggle visibility of the mobile filters",control:{type:"boolean"},defaultValue:[!1],required:!0},showMap:{table:{category:"Solr search settings"},name:"Show map",description:"Toggle visibility of the search map",control:{type:"boolean"},defaultValue:[!1],required:!0}},tags:["autodocs"]},d=e=>`
        <main>
            <toujou-solr-search class="solr" view-mode="${e.showMap?"map":"grid"}">
                <div id="solr-filters" class="solr-filters" ${e.showMobileFilters?"is-visible":""}>
                    <div class="solr-filters__mobile-header">
                        <h4 class="solr-filters__mobile-headline">Filtern</h4>
                        <div class="solr-filters__mobile-buttons">
                            <a href="/suche/?tx_solr%5Bq%5D=" class="solr-ajaxified solr-filters__mobile-button solr-filters__mobile-button--reset solr-filters__mobile-button--hidden">
                            alle löschen
                            </a>
                            <button class="solr-filters__mobile-button solr-filters__mobile-button--close"></button>
                        </div>
                    </div>
                    <div class="solr-facets-in-use solr-chips solr-chips--filters">
                        <div class="panel panel--no-bg-mobile">
                        <!--
                            <p class="solr-facets-in-use__no-filters">
                                Noch keine Filter ausgewählt!!!
                            </p>
                        -->


                            <div class="solr-facets-in-use__chips" id="tx-solr-facets-in-use">
                                <a href="#" class="solr-facets-in-use__link">
                                    <toujou-chip
                                        chip-icon-position="right"
                                        class="chip"
                                        chip-bg-color="primary"
                                        chip-border-radius="small"
                                        chip-size="extra-small"
                                        is-clickable=""
                                        >
                                            <toujou-icon class="icon chip__icon" icon-name="close" icon-size="extra-small"></toujou-icon>
                                            Ausflüge
                                    </toujou-chip>
                                </a>
                                <a href="#" class="solr-facets-in-use__link">
                                    <toujou-chip
                                        chip-icon-position="right"
                                        class="chip"
                                        chip-bg-color="primary"
                                        chip-border-radius="small"
                                        chip-size="extra-small"
                                        is-clickable=""
                                        >
                                        <toujou-icon class="icon chip__icon" icon-name="close" icon-size="extra-small"></toujou-icon>
                                        Architektur
                                    </toujou-chip>
                                </a>
                                <a href="#" class="solr-facets-in-use__link">
                                    <toujou-chip
                                        chip-icon-position="right"
                                        class="chip"
                                        chip-bg-color="primary"
                                        chip-border-radius="small"
                                        chip-size="extra-small"
                                        is-clickable=""
                                        >
                                        <toujou-icon class="icon chip__icon" icon-name="close" icon-size="extra-small"></toujou-icon>
                                        Touren
                                    </toujou-chip>
                                </a>
                                <a href="#" class="solr-facets-in-use__link">
                                    <toujou-chip
                                        chip-icon-position="right"
                                        class="chip"
                                        chip-bg-color="primary"
                                        chip-border-radius="small"
                                        chip-size="extra-small"
                                        is-clickable=""
                                        >
                                        <toujou-icon class="icon chip__icon" icon-name="close" icon-size="extra-small"></toujou-icon>
                                        Gastronomie
                                    </toujou-chip>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="solr-facets">
                        <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-destination">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="facet-label panel-title">
                                        <a class="panel-title__link" data-toggle="collapse" data-parent="#facet-accordiondestination" href="#facetdestination">Typ</a>
                                    </h3>
                                </div>
                                <div
                                    class="facet-option-list facet-type-options fluidfacet list-group panel-collapse collapse"
                                    data-facet-name="destination"
                                    data-facet-label="Land"
                                    id="facetdestination"
                                >
                                    <div class="facet-option list-group-item" data-facet-item-value="1">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-1"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:1"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-1">Sehenswertes & Freizeit&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="2">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-2"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:2"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-2">Unterkünfte&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="3">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-3"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:3"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-3">Gastronomie&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="4">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-4"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:4"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-4">Inhaltsseiten&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="5">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-5"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:5"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-5">Veranstaltungen&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="6">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-6"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:6"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-6">Touren&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="7">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-7"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:7"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-7">Blogbeiträge&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                   </div>
                                </div>
                            </div>
                        </div>

                        <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-accommodation">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="facet-label panel-title">
                                        <a class="panel-title__link" data-toggle="collapse" data-parent="#facet-accordionaccommodation" href="#facetaccommodation">Art der Unterkunft</a>
                                    </h3>
                                </div>
                                <div
                                    class="facet-option-list facet-type-options fluidfacet list-group panel-collapse collapse"
                                    data-facet-name="accommodation"
                                    data-facet-label="Art der Unterkunft"
                                    id="facetaccommodation"
                                >
                                    <div class="facet-option list-group-item" data-facet-item-value="12">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-1"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:12"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-12">Hotel&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="13">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-13"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:2"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-13">Ferienhaus&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="3">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-14"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:14"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-14">Gästehaus&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="4">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-15"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:15"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-15">Appartment&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="5">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-16"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:16"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-16">B&B&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="solr-facets__facet facet facet-type facet-type-dateRange" id="facet-accordion-departureDate">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="facet-label panel-title">
                                        <a class="panel-title__link" data-toggle="collapse" data-parent="#facet-accordiondepartureDate" href="#facetdepartureDate">Abreise</a>
                                    </h3>
                                </div>
                                <div class="panel-collapse collapse" id="facetdepartureDate">
                                    <toujou-solr-date-range-facet
                                        class="facet-date-range"
                                        data-facet-name="departureDate"
                                        data-facet-label="Abreise"
                                        data-range-min="2022-06-29T00:00:00+0000"
                                        data-range-max="2024-06-29T00:00:00+0000"
                                        data-range-min-selected=""
                                        data-range-max-selected=""
                                        data-range-gap="1"
                                        data-facet-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=departureDate%3A___FROM___-___TO___"
                                        data-facet-reset-url="/suche/"
                                        data-format="d.m.Y"
                                        >

                                        <toujou-datepicker date-format="d.m.Y" mindate="today">
                                            <toujou-input-group class="input-group solr-search__search-input-group">
                                                <input
                                                    type="text"
                                                    class="input input--text solr-facet__date-range solr-facet__date-range--date-from"
                                                    name="dateFrom"
                                                    value=""
                                                    placeholder="von">
                                            </toujou-input-group>
                                        </toujou-datepicker>
                                        <toujou-datepicker date-format="d.m.Y" mindate="today">
                                            <toujou-input-group class="input-group solr-search__search-input-group">
                                                <input
                                                    type="text"
                                                    class="input input--text solr-facet__date-range solr-facet__date-range--date-from"
                                                    name="dateUntil"
                                                    value=""
                                                    placeholder="bis">
                                            </toujou-input-group>
                                        </toujou-datepicker>
                                    </toujou-solr-date-range-facet>
                                </div>
                            </div>
                        </div>

                        <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-doktype">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="facet-label panel-title">
                                        <a class="panel-title__link" data-toggle="collapse" data-parent="#facet-accordiondepartureDate" href="#facetdoktype">Seitentyp</a>
                                    </h3>
                                </div>
                                <ul class="list list-group facet-option-list facet-type-options fluidfacet" data-facet-name="doktype" data-facet-label="Seitentyp" id="facetdoktype">
                                    <li class="list-group-item facet-option " data-facet-item-value="50">
                                        <div class="d-flex justify-content-between">
                                            <a class="facet solr-ajaxified" href="/suche/?tx_solr%5Bfilter%5D%5B0%5D=doktype%3A50">50</a> <span class="facet-result-count badge bg-info">123</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item facet-option " data-facet-item-value="20">
                                        <div class="d-flex justify-content-between">
                                            <a class="facet solr-ajaxified" href="/suche/?tx_solr%5Bfilter%5D%5B0%5D=doktype%3A20">Inhaltsseiten</a> <span class="facet-result-count badge bg-info">43</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item facet-option " data-facet-item-value="137">
                                        <div class="d-flex justify-content-between">
                                            <a class="facet solr-ajaxified" href="/suche/?tx_solr%5Bfilter%5D%5B0%5D=doktype%3A137">Blogbeiträge</a> <span class="facet-result-count badge bg-info">4</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="solr-facets__facet facet facet-type facet-type-hierarchy" id="facet-accordion-destination">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="facet-label panel-title">
                                        <a class="panel-title__link" data-toggle="collapse" data-parent="#facet-accordiondestination" href="#facetdestination">Reiseziel</a>
                                    </h3>
                                </div>
                                <div class="facet-option-list facet-type-hierarchy fluidfacet list-group panel-collapse collapse" data-facet-name="destination" data-facet-label="Reiseziel" id="facetdestination">
                                    <toujou-details id="details-0" class="details facet-details" element-design="default">
                                        <div class="facet-option list-group-item" data-facet-item-value="/358/" slot="summary">
                                            <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                <div class="checkbox-group">
                                                    <input
                                                        data-pristine-required-message-de="The given subject was empty."
                                                        class="checkbox facet-item solr-ajaxified"
                                                        id="facet-destination-option-/358/"
                                                        type="checkbox"
                                                        name="tx_solr[filter][]"
                                                        value="destination:/358/"
                                                        data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                    >
                                                    <label class="checkbox-group__label" for="facet-destination-option-/358/">Europa&nbsp;<span class="facet-result-count badge">11</span></label>
                                                </div>
                                            </toujou-input-group>
                                        </div>

                                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>

                                        <div class="list-group-item list-group solr-details__item-group" slot="content">
                                            <toujou-details class="facet facet--aggregated facet-option list-group-item details facet-details" data-facet-item-value="/358/455/">
                                                <div class="facet-option list-group-item" data-facet-item-value="/358/455/" slot="summary">
                                                    <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                        <div class="checkbox-group">
                                                            <input
                                                                data-pristine-required-message-de="The given subject was empty."
                                                                class="checkbox facet-item solr-ajaxified"
                                                                id="facet-destination-option-/358/455/"
                                                                type="checkbox"
                                                                name="tx_solr[filter][]"
                                                                value="facet-destination-option-/358/455/"
                                                                data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                            >
                                                            <label class="checkbox-group__label" for="facet-destination-option-/358/455/">Portugal&nbsp;<span class="facet-result-count badge">1</span></label>
                                                        </div>
                                                    </toujou-input-group>
                                                </div>
                                                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                                                <div class="list-group-item list-group solr-details__item-group" slot="content">
                                                    <div class="facet-option list-group-item" data-facet-item-value="/358/455/12">
                                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                            <div class="checkbox-group">
                                                                <input
                                                                    data-pristine-required-message-de="The given subject was empty."
                                                                    class="checkbox facet-item solr-ajaxified"
                                                                    id="facet-destination-option-/358/455/1255"
                                                                    type="checkbox"
                                                                    name="tx_solr[filter][]"
                                                                    value="facet-destination-option-/358/455/1255"
                                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                                >
                                                                <label class="checkbox-group__label" for="facet-destination-option-/358/455/1255">Algarve&nbsp;<span class="facet-result-count badge">1</span></label>
                                                            </div>
                                                        </toujou-input-group>
                                                    </div>
                                                    <div class="facet-option list-group-item" data-facet-item-value="/358/455/121">
                                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                            <div class="checkbox-group">
                                                                <input
                                                                    data-pristine-required-message-de="The given subject was empty."
                                                                    class="checkbox facet-item solr-ajaxified"
                                                                    id="facet-destination-option-/358/455/121"
                                                                    type="checkbox"
                                                                    name="tx_solr[filter][]"
                                                                    value="facet-destination-option-/358/455/121"
                                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                                >
                                                                <label class="checkbox-group__label" for="facet-destination-option-/358/455/">Lisboa&nbsp;<span class="facet-result-count badge">1</span></label>
                                                            </div>
                                                        </toujou-input-group>
                                                    </div>
                                                </div>
                                            </toujou-details>
                                        </div>
                                    </toujou-details>
                                    <toujou-details id="details-0" class="details facet-details" element-design="default">
                                        <div class="facet-option list-group-item" data-facet-item-value="/358/" slot="summary">
                                            <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                <div class="checkbox-group">
                                                    <input
                                                        data-pristine-required-message-de="The given subject was empty."
                                                        class="checkbox facet-item solr-ajaxified"
                                                        id="facet-destination-option-/358/"
                                                        type="checkbox"
                                                        name="tx_solr[filter][]"
                                                        value="destination:/358/"
                                                        data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                    >
                                                    <label class="checkbox-group__label" for="facet-destination-option-/358/">Afrika&nbsp;<span class="facet-result-count badge">11</span></label>
                                                </div>
                                            </toujou-input-group>
                                        </div>

                                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>

                                        <div class="list-group-item list-group solr-details__item-group" slot="content">
                                            <toujou-details class="facet facet--aggregated facet-option list-group-item details facet-details" data-facet-item-value="/358/455/">
                                                <div class="facet-option list-group-item" data-facet-item-value="/358/455/" slot="summary">
                                                    <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                        <div class="checkbox-group">
                                                            <input
                                                                data-pristine-required-message-de="The given subject was empty."
                                                                class="checkbox facet-item solr-ajaxified"
                                                                id="facet-destination-option-/358/455/"
                                                                type="checkbox"
                                                                name="tx_solr[filter][]"
                                                                value="facet-destination-option-/358/455/"
                                                                data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                            >
                                                            <label class="checkbox-group__label" for="facet-destination-option-/358/455/">Kapverden&nbsp;<span class="facet-result-count badge">1</span></label>
                                                        </div>
                                                    </toujou-input-group>
                                                </div>
                                                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                                                <div class="list-group-item list-group solr-details__item-group" slot="content">
                                                    <div class="facet-option list-group-item" data-facet-item-value="/358/455/12">
                                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                            <div class="checkbox-group">
                                                                <input
                                                                    data-pristine-required-message-de="The given subject was empty."
                                                                    class="checkbox facet-item solr-ajaxified"
                                                                    id="facet-destination-option-/358/455/1255"
                                                                    type="checkbox"
                                                                    name="tx_solr[filter][]"
                                                                    value="facet-destination-option-/358/455/1255"
                                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                                >
                                                                <label class="checkbox-group__label" for="facet-destination-option-/358/455/1255">Insel&nbsp;<span class="facet-result-count badge">1</span></label>
                                                            </div>
                                                        </toujou-input-group>
                                                    </div>
                                                    <div class="facet-option list-group-item" data-facet-item-value="/358/455/121">
                                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                            <div class="checkbox-group">
                                                                <input
                                                                    data-pristine-required-message-de="The given subject was empty."
                                                                    class="checkbox facet-item solr-ajaxified"
                                                                    id="facet-destination-option-/358/455/121"
                                                                    type="checkbox"
                                                                    name="tx_solr[filter][]"
                                                                    value="facet-destination-option-/358/455/121"
                                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                                >
                                                                <label class="checkbox-group__label" for="facet-destination-option-/358/455/">Küste&nbsp;<span class="facet-result-count badge">1</span></label>
                                                            </div>
                                                        </toujou-input-group>
                                                    </div>
                                                </div>
                                            </toujou-details>
                                        </div>
                                    </toujou-details>



                                    <toujou-details id="details-0" class="details facet-details" element-design="default">
                                        <div class="facet-option list-group-item" data-facet-item-value="/358/" slot="summary">
                                            <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                <div class="checkbox-group">
                                                    <input
                                                        data-pristine-required-message-de="The given subject was empty."
                                                        class="checkbox facet-item solr-ajaxified"
                                                        id="facet-destination-option-/358/"
                                                        type="checkbox"
                                                        name="tx_solr[filter][]"
                                                        value="destination:/358/"
                                                        data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                    >
                                                    <label class="checkbox-group__label" for="facet-destination-option-/358/">Only 1 level&nbsp;<span class="facet-result-count badge">11</span></label>
                                                </div>
                                            </toujou-input-group>
                                        </div>

                                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>

                                        <div class="list-group-item list-group solr-details__item-group" slot="content">
                                            <div class="facet-option list-group-item" data-facet-item-value="/358/455/12">
                                                <toujou-input-group class="input-group input-group--check checkbox-group">
                                                    <div class="checkbox-group">
                                                        <input
                                                            data-pristine-required-message-de="The given subject was empty."
                                                            class="checkbox facet-item solr-ajaxified"
                                                            id="facet-destination-option-/358/455/1255"
                                                            type="checkbox"
                                                            name="tx_solr[filter][]"
                                                            value="facet-destination-option-/358/455/1255"
                                                            data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                        >
                                                        <label class="checkbox-group__label" for="facet-destination-option-/358/455/1255">Algarve&nbsp;<span class="facet-result-count badge">1</span></label>
                                                    </div>
                                                </toujou-input-group>
                                            </div>
                                            <div class="facet-option list-group-item" data-facet-item-value="/358/455/121">
                                                <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                    <div class="checkbox-group">
                                                        <input
                                                            data-pristine-required-message-de="The given subject was empty."
                                                            class="checkbox facet-item solr-ajaxified"
                                                            id="facet-destination-option-/358/455/121"
                                                            type="checkbox"
                                                            name="tx_solr[filter][]"
                                                            value="facet-destination-option-/358/455/121"
                                                            data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                        >
                                                        <label class="checkbox-group__label" for="facet-destination-option-/358/455/">Lisboa&nbsp;<span class="facet-result-count badge">1</span></label>
                                                    </div>
                                                </toujou-input-group>
                                            </div>
                                        </div>
                                    </toujou-details>
                                </div>
















                            </div>
                        </div>
                    </div>
                    <!-- TODO: test and style these elements -->
                </div>
                <div class="solr-header">
                    <h2 class="solr-header__headline">
                        Suchergebnisse
                        <span id="solrHeaderCount" class="solr-header__count">
                        <span class="solr-header__count-number">446</span>
                        </span>
                    </h2>
                    <div class="solr-header__infos">
                        <p class="solr-header__range">
                            Zeige Ergebnisse 1 bis 12 von 446.
                        </p>
                        <div id="results-per-page" class="solr-results__per-page">
                            <form method="post" action="/suche/?tx_solr%5Bq%5D=" class="solr-results__per-page-form">
                                Ergebnisse pro Seite:

                                <toujou-input-group class="input-group input-group--single-select input-group--solr-per-page-select">
                                    <div class="select__wrapper select__wrapper--solr-per-page-select">
                                        <select name="tx_solr[resultsPerPage]" id="" class="form-controls input select solr-header__per-page-select" onchange="this.form.submit()">
                                            <option value="12" class="select__option" selected="selected">12</option>
                                            <option value="24" class="select__option">24</option>
                                            <option value="36" class="select__option">36</option>
                                        </select>
                                    </div>
                                </toujou-input-group>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="solr-search">
                    <form method="get" class="form solr-search__form" id="tx-solr-search-form-pi-results" action="/suche/" data-suggest="/suche?type=7384" data-suggest-header="Top Treffer" accept-charset="utf-8">
                        <toujou-input-group class="input-group solr-search__search-input-group">
                            <input id="tx_solr[q]" type="text" class="input input--text solr-search__search-input tx-solr-q js-solr-q tx-solr-suggest tx-solr-suggest-focus" name="tx_solr[q]" value="" placeholder="Search...">
                            <span class="solr-search__input-cancel-button"></span>
                        </toujou-input-group>

                         <toujou-input-group class="input-group solr-search__submit-group">
                           <button class="button" type="submit" button-size="normal" button-variant="primary">Suchen</button>
                        </toujou-input-group>
                    </form>
                    <button class="button solr-filter-button" is="toujou-button" button-icon-position="left" button-type="normal" button-variant="primary" is-expanded>
                        <toujou-icon class="icon" icon-size="normal" icon-color="bg" icon-name="filter"></toujou-icon>
                        Filtern
                    </button>
                    <div class="solr-facets-in-use solr-chips solr-chips--search">
                        <div class="panel panel--no-bg-mobile">
                            <p class="solr-facets-in-use__no-filters">
                                Noch keine Filter ausgewählt
                            </p>
                        </div>
                    </div>
                </div>
                <div id="solr-results" class="solr-results">
                    <div class="solr-results__topbar">
                        <div class="solr-results__topbar-left"></div>
                        <div class="solr-results__topbar-right solr-view-mode" role="radiogroup" aria-label="Ansicht">
                            <button
                                is="toujou-button"
                                class="button solr-view-mode__button solr-view-mode__button--grid"
                                button-variant="primary"
                                button-type="ghost"
                                button-size="normal"
                                button-icon-position="left"
                                data-view-mode="grid"
                                role="radio"
                                aria-checked="${!e.showMap}"
                                tabindex="0"
                            >
                                <toujou-icon class="icon" icon-name="grid"></toujou-icon>
                                 Raster
                             </button>
                              <button
                                is="toujou-button"
                                class="button solr-view-mode__button solr-view-mode__button--map"
                                button-variant="primary"
                                button-type="ghost"
                                button-size="normal"
                                button-icon-position="left"
                                data-view-mode="map"
                                role="radio"
                                aria-checked="${e.showMap}"
                                tabindex="0"
                            >
                                <toujou-icon class="icon" icon-name="map"></toujou-icon>
                                 Karte
                             </button>
                        </div>
                    </div>
                    <div class="solr-results__map-container">
                        <toujou-lazy-render>
                            <template>
                                <toujou-solr-search-map teaser-url="/teaser.html" geojsonurl="mapsResult.json" feature-geojson-url="geometryDetail.json" map-style="mapbox://styles/seabreeze/ck163tjmi3bkq1cpaf0g3pflt" access-token="pk.eyJ1Ijoic2VhYnJlZXplIiwiYSI6ImNqdWUxMWJtMDA4ZTEzeW56Mmc5M2tyOWkifQ.De9OBbERLFD-k5QyQGG5IA"></toujou-solr-search-map>
                            </template>
                        </toujou-lazy-render>
                    </div>
                    <ul class="solr-pagination solr-pagination--above">
                        <li class="solr-pagination__item solr-pagination__item--last solr-pagination__item--next ">
                            <button aria-hidden="true" class="solr-ajaxified solr-pagination__link solr-pagination__link--arrow solr-pagination__link--prev">
                            <span class="solr-pagination__icon solr-pagination__icon--prev"></span>
                            </button>
                        </li>
                        <li class="solr-pagination__pages-container">
                            <div class="solr-pagination__pages solr-pagination__pages--mobile">
                                <div class="select__wrapper solr-pagination__select-wrapper">
                                    <form method="post" id="paginationSelectForm" action="/suche/?tx_solr%5Bq%5D=">
                                        <select class="form-control input select solr-pagination__select" name="tx_solr[page]" onchange="this.form.submit()">
                                            <option value="1" selected="">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                        </select>
                                    </form>
                                </div>
                                <span class="solr-pagination__select-postfix">
                                von
                                </span>
                            </div>
                            <ul class="solr-pagination__pages solr-pagination__pages--desktop">
                                <li class="solr-pagination__item solr-pagination__item--active">
                                    <a href="/suche/?tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link solr-pagination__link--active">1</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=2&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">2</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=3&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">3</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=4&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">4</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=5&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">5</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=6&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">6</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=7&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">7</a>
                                </li>
                                <li class="solr-pagination__item solr-pagination__item--ellipsis">
                                    <a class="solr-pagination__link">...</a>
                                </li>
                            </ul>
                        </li>
                        <li class="solr-pagination__item solr-pagination__item--last solr-pagination__item--next ">
                            <a href="/suche/?tx_solr%5Bpage%5D=2&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link solr-pagination__link--arrow solr-pagination__link--next">
                            <span class="solr-pagination__icon solr-pagination__icon--next"></span>
                            </a>
                        </li>
                    </ul>

                    <ul class="card-collection solr-results__card-collection">
                        <li class="card-collection__item">
                            <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                                <header class="collection-item__top">
                                    <figure class="collection-item__figure">
                                        <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                    </figure>
                                    <div class="collection-item__categories">
                                        ${t(["Tutorials"],"primary")}
                                    </div>
                                    <div class="collection-item__location">
                                        <h4 class="collection-item__location-city">
                                            Marbella
                                        </h4>
                                        <h5 class="collection-item__location-country">
                                            Spanien
                                        </h5>
                                    </div>
                                    <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                                </header>
                                <div class="collection-item__bottom">
                                    <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                                    <p class="collection-item__subtitles">
                                        <span class="collection-item__subtitle">Hotel name</span>
                                    </p>

                                    <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

                                    <div class="collection-item__trip-infos">
                                        <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                        <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                                    </div>

                                    <p class="collection-item__trip-price">
                                        <span class="collection-item__trip-price-prefix">ab</span>
                                        <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                        <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                                    </p>

                                    <a href="#" class="collection-item__button">
                                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                        zur Beschreibung
                                    </a>
                                </div>
                            </toujou-collection-item>
                        </li>
                        <li class="card-collection__item">
                            <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                                <header class="collection-item__top">
                                    <figure class="collection-item__figure">
                                        <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                    </figure>
                                    <div class="collection-item__categories">
                                        ${t(["Neu","Rabatt"],"primary")}
                                    </div>
                                    <div class="collection-item__location">
                                        <h4 class="collection-item__location-city">
                                            Marbella
                                        </h4>
                                        <h5 class="collection-item__location-country">
                                            Spanien
                                        </h5>
                                    </div>
                                    <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                                </header>
                                <div class="collection-item__bottom">
                                    <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                                    <p class="collection-item__subtitles">
                                        <span class="collection-item__subtitle">Hotel name</span>
                                    </p>

                                    <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

                                    <div class="collection-item__trip-infos">
                                        <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                        <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                                    </div>

                                    <p class="collection-item__trip-price">
                                        <span class="collection-item__trip-price-prefix">ab</span>
                                        <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                        <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                                    </p>

                                    <a href="#" class="collection-item__button">
                                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                        zur Beschreibung
                                    </a>
                                </div>
                            </toujou-collection-item>
                        </li>
                        <li class="card-collection__item">
                            <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                                <header class="collection-item__top">
                                    <figure class="collection-item__figure">
                                        <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                    </figure>
                                    <div class="collection-item__categories">
                                      ${t(["Tutorials"],"primary")}
                                    </div>
                                    <div class="collection-item__location">
                                        <h4 class="collection-item__location-city">
                                            Marbella
                                        </h4>
                                        <h5 class="collection-item__location-country">
                                            Spanien
                                        </h5>
                                    </div>
                                    <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                                </header>
                                <div class="collection-item__bottom">
                                    <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                                    <p class="collection-item__subtitles">
                                        <span class="collection-item__subtitle">Hotel name</span>
                                    </p>

                                    <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

                                    <div class="collection-item__trip-infos">
                                        <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                        <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                                    </div>

                                    <p class="collection-item__trip-price">
                                        <span class="collection-item__trip-price-prefix">ab</span>
                                        <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                        <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                                    </p>

                                    <a href="#" class="collection-item__button">
                                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                        zur Beschreibung
                                    </a>
                                </div>
                            </toujou-collection-item>
                        </li>
                        <li class="card-collection__item">
                            <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                                <header class="collection-item__top">
                                    <figure class="collection-item__figure">
                                        <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                    </figure>
                                    <div class="collection-item__categories">
                                        ${t(["Tutorials"],"primary")}
                                    </div>
                                    <div class="collection-item__location">
                                        <h4 class="collection-item__location-city">
                                            Marbella
                                        </h4>
                                        <h5 class="collection-item__location-country">
                                            Spanien
                                        </h5>
                                    </div>
                                    <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                                </header>
                                <div class="collection-item__bottom">
                                    <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                                    <p class="collection-item__subtitles">
                                        <span class="collection-item__subtitle">Hotel name</span>
                                    </p>

                                    <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

                                    <div class="collection-item__trip-infos">
                                        <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                        <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                                    </div>

                                    <p class="collection-item__trip-price">
                                        <span class="collection-item__trip-price-prefix">ab</span>
                                        <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                        <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                                    </p>

                                    <a href="#" class="collection-item__button">
                                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                        zur Beschreibung
                                    </a>
                                </div>
                            </toujou-collection-item>
                        </li>
                        <li class="card-collection__item">
                            <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                                <header class="collection-item__top">
                                    <figure class="collection-item__figure">
                                        <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                    </figure>
                                    <div class="collection-item__categories">
                                        ${t(["Tutorials"],"primary")}
                                    </div>
                                    <div class="collection-item__location">
                                        <h4 class="collection-item__location-city">
                                            Marbella
                                        </h4>
                                        <h5 class="collection-item__location-country">
                                            Spanien
                                        </h5>
                                    </div>
                                    <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                                </header>
                                <div class="collection-item__bottom">
                                    <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                                    <p class="collection-item__subtitles">
                                        <span class="collection-item__subtitle">Hotel name</span>
                                    </p>

                                    <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

                                    <div class="collection-item__trip-infos">
                                        <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                        <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                                    </div>

                                    <p class="collection-item__trip-price">
                                        <span class="collection-item__trip-price-prefix">ab</span>
                                        <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                        <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                                    </p>

                                    <a href="#" class="collection-item__button">
                                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                        zur Beschreibung
                                    </a>
                                </div>
                            </toujou-collection-item>
                        </li>
                        <li class="card-collection__item">
                            <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                                <header class="collection-item__top">
                                    <figure class="collection-item__figure">
                                        <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                    </figure>
                                    <div class="collection-item__categories">
                                        ${t(["Tutorials"],"primary")}
                                    </div>
                                    <div class="collection-item__location">
                                        <h4 class="collection-item__location-city">
                                            Marbella
                                        </h4>
                                        <h5 class="collection-item__location-country">
                                            Spanien
                                        </h5>
                                    </div>
                                    <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                                </header>
                                <div class="collection-item__bottom">
                                    <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                                    <p class="collection-item__subtitles">
                                        <span class="collection-item__subtitle">Hotel name</span>
                                    </p>

                                    <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

                                    <div class="collection-item__trip-infos">
                                        <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                        <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                                    </div>

                                    <p class="collection-item__trip-price">
                                        <span class="collection-item__trip-price-prefix">ab</span>
                                        <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                        <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                                    </p>

                                    <a href="#" class="collection-item__button">
                                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                        zur Beschreibung
                                    </a>
                                </div>
                            </toujou-collection-item>
                        </li>
                    </ul>

                    <ul class="solr-pagination solr-pagination--below">
                        <li class="solr-pagination__item solr-pagination__item--last solr-pagination__item--next ">
                            <a href="#" class="button solr-ajaxified solr-pagination__button solr-pagination__link solr-pagination__link--arrow solr-pagination__link--prev">
                                <toujou-icon class="icon" icon-color="primary" icon-size="normal" icon-name="chevron-left"></toujou-icon>
                            </a>
                        </li>
                        <li class="solr-pagination__pages-container">
                            <div class="solr-pagination__pages solr-pagination__pages--mobile">
                                <div class="select__wrapper solr-pagination__select-wrapper">
                                    <form method="post" id="paginationSelectForm" action="/suche/?tx_solr%5Bq%5D=">
                                        <toujou-input-group class="input-group input-group--single-select   ">
                                            <div class="select__wrapper solr-pagination__select-wrapper">
                                                <select data-pristine-required-message-de="The given subject was empty." class="form-control input select solr-pagination__select" id="testform-1000091-singleselect-1" name="tx_form_formframework[testform-1000091][singleselect-1]" name="tx_solr[page]" onchange="this.form.submit()">
                                                    <option class="seclect__option" value="">1</option>
                                                    <option class="seclect__option" value="2">2</option>
                                                    <option class="seclect__option" value="3">3</option>
                                                    <option class="seclect__option" value="4">4</option>
                                                    <option class="seclect__option" value="5">5</option>
                                                </select>
                                            </div>
                                            <span class="pristine-error form__error">This is an error message!</span>
                                        </toujou-input-group>
                                    </form>
                                </div>
                                <span class="solr-pagination__select-postfix">von</span>
                            </div>
                            <ul class="solr-pagination__pages solr-pagination__pages--desktop">
                                <li class="solr-pagination__item solr-pagination__item--active">
                                    <a href="/suche/?tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link solr-pagination__link--active">1</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=2&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">2</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=3&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">3</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=4&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">4</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=5&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">5</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=6&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">6</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=7&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">7</a>
                                </li>
                                <li class="solr-pagination__item solr-pagination__item--ellipsis">
                                    <a class="solr-pagination__link">...</a>
                                </li>
                            </ul>
                        </li>
                        <li class="solr-pagination__item solr-pagination__item--last solr-pagination__item--next ">
                            <a href="#" class="button solr-ajaxified solr-pagination__button solr-pagination__link solr-pagination__link--arrow solr-pagination__link--prev">
                                <toujou-icon class="icon" icon-color="primary" icon-size="normal" icon-name="chevron-right"></toujou-icon>
                            </a>
                        </li>
                    </ul>
                </div>
                <!---->
            </toujou-solr-search>
        </main>
     `,i=d.bind({});i.args={showMobileFilters:!1,showMap:!1};var l,c,n;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`(args: SolrSearchStoryProps) => {
  return \`
        <main>
            <toujou-solr-search class="solr" view-mode="\${args.showMap ? 'map' : 'grid'}">
                <div id="solr-filters" class="solr-filters" \${args.showMobileFilters ? 'is-visible' : ''}>
                    <div class="solr-filters__mobile-header">
                        <h4 class="solr-filters__mobile-headline">Filtern</h4>
                        <div class="solr-filters__mobile-buttons">
                            <a href="/suche/?tx_solr%5Bq%5D=" class="solr-ajaxified solr-filters__mobile-button solr-filters__mobile-button--reset solr-filters__mobile-button--hidden">
                            alle löschen
                            </a>
                            <button class="solr-filters__mobile-button solr-filters__mobile-button--close"></button>
                        </div>
                    </div>
                    <div class="solr-facets-in-use solr-chips solr-chips--filters">
                        <div class="panel panel--no-bg-mobile">
                        <!--
                            <p class="solr-facets-in-use__no-filters">
                                Noch keine Filter ausgewählt!!!
                            </p>
                        -->


                            <div class="solr-facets-in-use__chips" id="tx-solr-facets-in-use">
                                <a href="#" class="solr-facets-in-use__link">
                                    <toujou-chip
                                        chip-icon-position="right"
                                        class="chip"
                                        chip-bg-color="primary"
                                        chip-border-radius="small"
                                        chip-size="extra-small"
                                        is-clickable=""
                                        >
                                            <toujou-icon class="icon chip__icon" icon-name="close" icon-size="extra-small"></toujou-icon>
                                            Ausflüge
                                    </toujou-chip>
                                </a>
                                <a href="#" class="solr-facets-in-use__link">
                                    <toujou-chip
                                        chip-icon-position="right"
                                        class="chip"
                                        chip-bg-color="primary"
                                        chip-border-radius="small"
                                        chip-size="extra-small"
                                        is-clickable=""
                                        >
                                        <toujou-icon class="icon chip__icon" icon-name="close" icon-size="extra-small"></toujou-icon>
                                        Architektur
                                    </toujou-chip>
                                </a>
                                <a href="#" class="solr-facets-in-use__link">
                                    <toujou-chip
                                        chip-icon-position="right"
                                        class="chip"
                                        chip-bg-color="primary"
                                        chip-border-radius="small"
                                        chip-size="extra-small"
                                        is-clickable=""
                                        >
                                        <toujou-icon class="icon chip__icon" icon-name="close" icon-size="extra-small"></toujou-icon>
                                        Touren
                                    </toujou-chip>
                                </a>
                                <a href="#" class="solr-facets-in-use__link">
                                    <toujou-chip
                                        chip-icon-position="right"
                                        class="chip"
                                        chip-bg-color="primary"
                                        chip-border-radius="small"
                                        chip-size="extra-small"
                                        is-clickable=""
                                        >
                                        <toujou-icon class="icon chip__icon" icon-name="close" icon-size="extra-small"></toujou-icon>
                                        Gastronomie
                                    </toujou-chip>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="solr-facets">
                        <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-destination">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="facet-label panel-title">
                                        <a class="panel-title__link" data-toggle="collapse" data-parent="#facet-accordiondestination" href="#facetdestination">Typ</a>
                                    </h3>
                                </div>
                                <div
                                    class="facet-option-list facet-type-options fluidfacet list-group panel-collapse collapse"
                                    data-facet-name="destination"
                                    data-facet-label="Land"
                                    id="facetdestination"
                                >
                                    <div class="facet-option list-group-item" data-facet-item-value="1">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-1"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:1"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-1">Sehenswertes & Freizeit&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="2">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-2"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:2"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-2">Unterkünfte&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="3">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-3"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:3"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-3">Gastronomie&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="4">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-4"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:4"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-4">Inhaltsseiten&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="5">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-5"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:5"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-5">Veranstaltungen&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="6">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-6"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:6"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-6">Touren&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="7">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-7"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:7"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-7">Blogbeiträge&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                   </div>
                                </div>
                            </div>
                        </div>

                        <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-accommodation">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="facet-label panel-title">
                                        <a class="panel-title__link" data-toggle="collapse" data-parent="#facet-accordionaccommodation" href="#facetaccommodation">Art der Unterkunft</a>
                                    </h3>
                                </div>
                                <div
                                    class="facet-option-list facet-type-options fluidfacet list-group panel-collapse collapse"
                                    data-facet-name="accommodation"
                                    data-facet-label="Art der Unterkunft"
                                    id="facetaccommodation"
                                >
                                    <div class="facet-option list-group-item" data-facet-item-value="12">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-1"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:12"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-12">Hotel&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="13">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-13"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:2"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-13">Ferienhaus&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="3">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-14"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:14"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-14">Gästehaus&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="4">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-15"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:15"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-15">Appartment&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                    <div class="facet-option list-group-item" data-facet-item-value="5">
                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                            <div class="checkbox-group">
                                                <input
                                                    data-pristine-required-message-de="The given subject was empty."
                                                    class="checkbox facet-item solr-ajaxified"
                                                    id="facet-destination-option-16"
                                                    type="checkbox"
                                                    name="tx_solr[filter][]"
                                                    value="destination:16"
                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                >
                                                <label class="checkbox-group__label" for="facet-destination-option-16">B&B&nbsp;<span class="facet-result-count badge">228</span></label>
                                            </div>
                                        </toujou-input-group>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="solr-facets__facet facet facet-type facet-type-dateRange" id="facet-accordion-departureDate">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="facet-label panel-title">
                                        <a class="panel-title__link" data-toggle="collapse" data-parent="#facet-accordiondepartureDate" href="#facetdepartureDate">Abreise</a>
                                    </h3>
                                </div>
                                <div class="panel-collapse collapse" id="facetdepartureDate">
                                    <toujou-solr-date-range-facet
                                        class="facet-date-range"
                                        data-facet-name="departureDate"
                                        data-facet-label="Abreise"
                                        data-range-min="2022-06-29T00:00:00+0000"
                                        data-range-max="2024-06-29T00:00:00+0000"
                                        data-range-min-selected=""
                                        data-range-max-selected=""
                                        data-range-gap="1"
                                        data-facet-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=departureDate%3A___FROM___-___TO___"
                                        data-facet-reset-url="/suche/"
                                        data-format="d.m.Y"
                                        >

                                        <toujou-datepicker date-format="d.m.Y" mindate="today">
                                            <toujou-input-group class="input-group solr-search__search-input-group">
                                                <input
                                                    type="text"
                                                    class="input input--text solr-facet__date-range solr-facet__date-range--date-from"
                                                    name="dateFrom"
                                                    value=""
                                                    placeholder="von">
                                            </toujou-input-group>
                                        </toujou-datepicker>
                                        <toujou-datepicker date-format="d.m.Y" mindate="today">
                                            <toujou-input-group class="input-group solr-search__search-input-group">
                                                <input
                                                    type="text"
                                                    class="input input--text solr-facet__date-range solr-facet__date-range--date-from"
                                                    name="dateUntil"
                                                    value=""
                                                    placeholder="bis">
                                            </toujou-input-group>
                                        </toujou-datepicker>
                                    </toujou-solr-date-range-facet>
                                </div>
                            </div>
                        </div>

                        <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-doktype">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="facet-label panel-title">
                                        <a class="panel-title__link" data-toggle="collapse" data-parent="#facet-accordiondepartureDate" href="#facetdoktype">Seitentyp</a>
                                    </h3>
                                </div>
                                <ul class="list list-group facet-option-list facet-type-options fluidfacet" data-facet-name="doktype" data-facet-label="Seitentyp" id="facetdoktype">
                                    <li class="list-group-item facet-option " data-facet-item-value="50">
                                        <div class="d-flex justify-content-between">
                                            <a class="facet solr-ajaxified" href="/suche/?tx_solr%5Bfilter%5D%5B0%5D=doktype%3A50">50</a> <span class="facet-result-count badge bg-info">123</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item facet-option " data-facet-item-value="20">
                                        <div class="d-flex justify-content-between">
                                            <a class="facet solr-ajaxified" href="/suche/?tx_solr%5Bfilter%5D%5B0%5D=doktype%3A20">Inhaltsseiten</a> <span class="facet-result-count badge bg-info">43</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item facet-option " data-facet-item-value="137">
                                        <div class="d-flex justify-content-between">
                                            <a class="facet solr-ajaxified" href="/suche/?tx_solr%5Bfilter%5D%5B0%5D=doktype%3A137">Blogbeiträge</a> <span class="facet-result-count badge bg-info">4</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="solr-facets__facet facet facet-type facet-type-hierarchy" id="facet-accordion-destination">
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="facet-label panel-title">
                                        <a class="panel-title__link" data-toggle="collapse" data-parent="#facet-accordiondestination" href="#facetdestination">Reiseziel</a>
                                    </h3>
                                </div>
                                <div class="facet-option-list facet-type-hierarchy fluidfacet list-group panel-collapse collapse" data-facet-name="destination" data-facet-label="Reiseziel" id="facetdestination">
                                    <toujou-details id="details-0" class="details facet-details" element-design="default">
                                        <div class="facet-option list-group-item" data-facet-item-value="/358/" slot="summary">
                                            <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                <div class="checkbox-group">
                                                    <input
                                                        data-pristine-required-message-de="The given subject was empty."
                                                        class="checkbox facet-item solr-ajaxified"
                                                        id="facet-destination-option-/358/"
                                                        type="checkbox"
                                                        name="tx_solr[filter][]"
                                                        value="destination:/358/"
                                                        data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                    >
                                                    <label class="checkbox-group__label" for="facet-destination-option-/358/">Europa&nbsp;<span class="facet-result-count badge">11</span></label>
                                                </div>
                                            </toujou-input-group>
                                        </div>

                                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>

                                        <div class="list-group-item list-group solr-details__item-group" slot="content">
                                            <toujou-details class="facet facet--aggregated facet-option list-group-item details facet-details" data-facet-item-value="/358/455/">
                                                <div class="facet-option list-group-item" data-facet-item-value="/358/455/" slot="summary">
                                                    <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                        <div class="checkbox-group">
                                                            <input
                                                                data-pristine-required-message-de="The given subject was empty."
                                                                class="checkbox facet-item solr-ajaxified"
                                                                id="facet-destination-option-/358/455/"
                                                                type="checkbox"
                                                                name="tx_solr[filter][]"
                                                                value="facet-destination-option-/358/455/"
                                                                data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                            >
                                                            <label class="checkbox-group__label" for="facet-destination-option-/358/455/">Portugal&nbsp;<span class="facet-result-count badge">1</span></label>
                                                        </div>
                                                    </toujou-input-group>
                                                </div>
                                                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                                                <div class="list-group-item list-group solr-details__item-group" slot="content">
                                                    <div class="facet-option list-group-item" data-facet-item-value="/358/455/12">
                                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                            <div class="checkbox-group">
                                                                <input
                                                                    data-pristine-required-message-de="The given subject was empty."
                                                                    class="checkbox facet-item solr-ajaxified"
                                                                    id="facet-destination-option-/358/455/1255"
                                                                    type="checkbox"
                                                                    name="tx_solr[filter][]"
                                                                    value="facet-destination-option-/358/455/1255"
                                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                                >
                                                                <label class="checkbox-group__label" for="facet-destination-option-/358/455/1255">Algarve&nbsp;<span class="facet-result-count badge">1</span></label>
                                                            </div>
                                                        </toujou-input-group>
                                                    </div>
                                                    <div class="facet-option list-group-item" data-facet-item-value="/358/455/121">
                                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                            <div class="checkbox-group">
                                                                <input
                                                                    data-pristine-required-message-de="The given subject was empty."
                                                                    class="checkbox facet-item solr-ajaxified"
                                                                    id="facet-destination-option-/358/455/121"
                                                                    type="checkbox"
                                                                    name="tx_solr[filter][]"
                                                                    value="facet-destination-option-/358/455/121"
                                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                                >
                                                                <label class="checkbox-group__label" for="facet-destination-option-/358/455/">Lisboa&nbsp;<span class="facet-result-count badge">1</span></label>
                                                            </div>
                                                        </toujou-input-group>
                                                    </div>
                                                </div>
                                            </toujou-details>
                                        </div>
                                    </toujou-details>
                                    <toujou-details id="details-0" class="details facet-details" element-design="default">
                                        <div class="facet-option list-group-item" data-facet-item-value="/358/" slot="summary">
                                            <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                <div class="checkbox-group">
                                                    <input
                                                        data-pristine-required-message-de="The given subject was empty."
                                                        class="checkbox facet-item solr-ajaxified"
                                                        id="facet-destination-option-/358/"
                                                        type="checkbox"
                                                        name="tx_solr[filter][]"
                                                        value="destination:/358/"
                                                        data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                    >
                                                    <label class="checkbox-group__label" for="facet-destination-option-/358/">Afrika&nbsp;<span class="facet-result-count badge">11</span></label>
                                                </div>
                                            </toujou-input-group>
                                        </div>

                                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>

                                        <div class="list-group-item list-group solr-details__item-group" slot="content">
                                            <toujou-details class="facet facet--aggregated facet-option list-group-item details facet-details" data-facet-item-value="/358/455/">
                                                <div class="facet-option list-group-item" data-facet-item-value="/358/455/" slot="summary">
                                                    <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                        <div class="checkbox-group">
                                                            <input
                                                                data-pristine-required-message-de="The given subject was empty."
                                                                class="checkbox facet-item solr-ajaxified"
                                                                id="facet-destination-option-/358/455/"
                                                                type="checkbox"
                                                                name="tx_solr[filter][]"
                                                                value="facet-destination-option-/358/455/"
                                                                data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                            >
                                                            <label class="checkbox-group__label" for="facet-destination-option-/358/455/">Kapverden&nbsp;<span class="facet-result-count badge">1</span></label>
                                                        </div>
                                                    </toujou-input-group>
                                                </div>
                                                <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
                                                <div class="list-group-item list-group solr-details__item-group" slot="content">
                                                    <div class="facet-option list-group-item" data-facet-item-value="/358/455/12">
                                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                            <div class="checkbox-group">
                                                                <input
                                                                    data-pristine-required-message-de="The given subject was empty."
                                                                    class="checkbox facet-item solr-ajaxified"
                                                                    id="facet-destination-option-/358/455/1255"
                                                                    type="checkbox"
                                                                    name="tx_solr[filter][]"
                                                                    value="facet-destination-option-/358/455/1255"
                                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                                >
                                                                <label class="checkbox-group__label" for="facet-destination-option-/358/455/1255">Insel&nbsp;<span class="facet-result-count badge">1</span></label>
                                                            </div>
                                                        </toujou-input-group>
                                                    </div>
                                                    <div class="facet-option list-group-item" data-facet-item-value="/358/455/121">
                                                        <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                            <div class="checkbox-group">
                                                                <input
                                                                    data-pristine-required-message-de="The given subject was empty."
                                                                    class="checkbox facet-item solr-ajaxified"
                                                                    id="facet-destination-option-/358/455/121"
                                                                    type="checkbox"
                                                                    name="tx_solr[filter][]"
                                                                    value="facet-destination-option-/358/455/121"
                                                                    data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                                >
                                                                <label class="checkbox-group__label" for="facet-destination-option-/358/455/">Küste&nbsp;<span class="facet-result-count badge">1</span></label>
                                                            </div>
                                                        </toujou-input-group>
                                                    </div>
                                                </div>
                                            </toujou-details>
                                        </div>
                                    </toujou-details>



                                    <toujou-details id="details-0" class="details facet-details" element-design="default">
                                        <div class="facet-option list-group-item" data-facet-item-value="/358/" slot="summary">
                                            <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                <div class="checkbox-group">
                                                    <input
                                                        data-pristine-required-message-de="The given subject was empty."
                                                        class="checkbox facet-item solr-ajaxified"
                                                        id="facet-destination-option-/358/"
                                                        type="checkbox"
                                                        name="tx_solr[filter][]"
                                                        value="destination:/358/"
                                                        data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                    >
                                                    <label class="checkbox-group__label" for="facet-destination-option-/358/">Only 1 level&nbsp;<span class="facet-result-count badge">11</span></label>
                                                </div>
                                            </toujou-input-group>
                                        </div>

                                        <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>

                                        <div class="list-group-item list-group solr-details__item-group" slot="content">
                                            <div class="facet-option list-group-item" data-facet-item-value="/358/455/12">
                                                <toujou-input-group class="input-group input-group--check checkbox-group">
                                                    <div class="checkbox-group">
                                                        <input
                                                            data-pristine-required-message-de="The given subject was empty."
                                                            class="checkbox facet-item solr-ajaxified"
                                                            id="facet-destination-option-/358/455/1255"
                                                            type="checkbox"
                                                            name="tx_solr[filter][]"
                                                            value="facet-destination-option-/358/455/1255"
                                                            data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                        >
                                                        <label class="checkbox-group__label" for="facet-destination-option-/358/455/1255">Algarve&nbsp;<span class="facet-result-count badge">1</span></label>
                                                    </div>
                                                </toujou-input-group>
                                            </div>
                                            <div class="facet-option list-group-item" data-facet-item-value="/358/455/121">
                                                <toujou-input-group class="input-group input-group--check checkbox-group   ">
                                                    <div class="checkbox-group">
                                                        <input
                                                            data-pristine-required-message-de="The given subject was empty."
                                                            class="checkbox facet-item solr-ajaxified"
                                                            id="facet-destination-option-/358/455/121"
                                                            type="checkbox"
                                                            name="tx_solr[filter][]"
                                                            value="facet-destination-option-/358/455/121"
                                                            data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D="
                                                        >
                                                        <label class="checkbox-group__label" for="facet-destination-option-/358/455/">Lisboa&nbsp;<span class="facet-result-count badge">1</span></label>
                                                    </div>
                                                </toujou-input-group>
                                            </div>
                                        </div>
                                    </toujou-details>
                                </div>
















                            </div>
                        </div>
                    </div>
                    <!-- TODO: test and style these elements -->
                </div>
                <div class="solr-header">
                    <h2 class="solr-header__headline">
                        Suchergebnisse
                        <span id="solrHeaderCount" class="solr-header__count">
                        <span class="solr-header__count-number">446</span>
                        </span>
                    </h2>
                    <div class="solr-header__infos">
                        <p class="solr-header__range">
                            Zeige Ergebnisse 1 bis 12 von 446.
                        </p>
                        <div id="results-per-page" class="solr-results__per-page">
                            <form method="post" action="/suche/?tx_solr%5Bq%5D=" class="solr-results__per-page-form">
                                Ergebnisse pro Seite:

                                <toujou-input-group class="input-group input-group--single-select input-group--solr-per-page-select">
                                    <div class="select__wrapper select__wrapper--solr-per-page-select">
                                        <select name="tx_solr[resultsPerPage]" id="" class="form-controls input select solr-header__per-page-select" onchange="this.form.submit()">
                                            <option value="12" class="select__option" selected="selected">12</option>
                                            <option value="24" class="select__option">24</option>
                                            <option value="36" class="select__option">36</option>
                                        </select>
                                    </div>
                                </toujou-input-group>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="solr-search">
                    <form method="get" class="form solr-search__form" id="tx-solr-search-form-pi-results" action="/suche/" data-suggest="/suche?type=7384" data-suggest-header="Top Treffer" accept-charset="utf-8">
                        <toujou-input-group class="input-group solr-search__search-input-group">
                            <input id="tx_solr[q]" type="text" class="input input--text solr-search__search-input tx-solr-q js-solr-q tx-solr-suggest tx-solr-suggest-focus" name="tx_solr[q]" value="" placeholder="Search...">
                            <span class="solr-search__input-cancel-button"></span>
                        </toujou-input-group>

                         <toujou-input-group class="input-group solr-search__submit-group">
                           <button class="button" type="submit" button-size="normal" button-variant="primary">Suchen</button>
                        </toujou-input-group>
                    </form>
                    <button class="button solr-filter-button" is="toujou-button" button-icon-position="left" button-type="normal" button-variant="primary" is-expanded>
                        <toujou-icon class="icon" icon-size="normal" icon-color="bg" icon-name="filter"></toujou-icon>
                        Filtern
                    </button>
                    <div class="solr-facets-in-use solr-chips solr-chips--search">
                        <div class="panel panel--no-bg-mobile">
                            <p class="solr-facets-in-use__no-filters">
                                Noch keine Filter ausgewählt
                            </p>
                        </div>
                    </div>
                </div>
                <div id="solr-results" class="solr-results">
                    <div class="solr-results__topbar">
                        <div class="solr-results__topbar-left"></div>
                        <div class="solr-results__topbar-right solr-view-mode" role="radiogroup" aria-label="Ansicht">
                            <button
                                is="toujou-button"
                                class="button solr-view-mode__button solr-view-mode__button--grid"
                                button-variant="primary"
                                button-type="ghost"
                                button-size="normal"
                                button-icon-position="left"
                                data-view-mode="grid"
                                role="radio"
                                aria-checked="\${!args.showMap}"
                                tabindex="0"
                            >
                                <toujou-icon class="icon" icon-name="grid"></toujou-icon>
                                 Raster
                             </button>
                              <button
                                is="toujou-button"
                                class="button solr-view-mode__button solr-view-mode__button--map"
                                button-variant="primary"
                                button-type="ghost"
                                button-size="normal"
                                button-icon-position="left"
                                data-view-mode="map"
                                role="radio"
                                aria-checked="\${args.showMap}"
                                tabindex="0"
                            >
                                <toujou-icon class="icon" icon-name="map"></toujou-icon>
                                 Karte
                             </button>
                        </div>
                    </div>
                    <div class="solr-results__map-container">
                        <toujou-lazy-render>
                            <template>
                                <toujou-solr-search-map teaser-url="/teaser.html" geojsonurl="mapsResult.json" feature-geojson-url="geometryDetail.json" map-style="mapbox://styles/seabreeze/ck163tjmi3bkq1cpaf0g3pflt" access-token="pk.eyJ1Ijoic2VhYnJlZXplIiwiYSI6ImNqdWUxMWJtMDA4ZTEzeW56Mmc5M2tyOWkifQ.De9OBbERLFD-k5QyQGG5IA"></toujou-solr-search-map>
                            </template>
                        </toujou-lazy-render>
                    </div>
                    <ul class="solr-pagination solr-pagination--above">
                        <li class="solr-pagination__item solr-pagination__item--last solr-pagination__item--next ">
                            <button aria-hidden="true" class="solr-ajaxified solr-pagination__link solr-pagination__link--arrow solr-pagination__link--prev">
                            <span class="solr-pagination__icon solr-pagination__icon--prev"></span>
                            </button>
                        </li>
                        <li class="solr-pagination__pages-container">
                            <div class="solr-pagination__pages solr-pagination__pages--mobile">
                                <div class="select__wrapper solr-pagination__select-wrapper">
                                    <form method="post" id="paginationSelectForm" action="/suche/?tx_solr%5Bq%5D=">
                                        <select class="form-control input select solr-pagination__select" name="tx_solr[page]" onchange="this.form.submit()">
                                            <option value="1" selected="">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                        </select>
                                    </form>
                                </div>
                                <span class="solr-pagination__select-postfix">
                                von
                                </span>
                            </div>
                            <ul class="solr-pagination__pages solr-pagination__pages--desktop">
                                <li class="solr-pagination__item solr-pagination__item--active">
                                    <a href="/suche/?tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link solr-pagination__link--active">1</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=2&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">2</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=3&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">3</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=4&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">4</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=5&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">5</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=6&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">6</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=7&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">7</a>
                                </li>
                                <li class="solr-pagination__item solr-pagination__item--ellipsis">
                                    <a class="solr-pagination__link">...</a>
                                </li>
                            </ul>
                        </li>
                        <li class="solr-pagination__item solr-pagination__item--last solr-pagination__item--next ">
                            <a href="/suche/?tx_solr%5Bpage%5D=2&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link solr-pagination__link--arrow solr-pagination__link--next">
                            <span class="solr-pagination__icon solr-pagination__icon--next"></span>
                            </a>
                        </li>
                    </ul>

                    <ul class="card-collection solr-results__card-collection">
                        <li class="card-collection__item">
                            <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                                <header class="collection-item__top">
                                    <figure class="collection-item__figure">
                                        <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                    </figure>
                                    <div class="collection-item__categories">
                                        \${renderCardCategoryChips(['Tutorials'], 'primary')}
                                    </div>
                                    <div class="collection-item__location">
                                        <h4 class="collection-item__location-city">
                                            Marbella
                                        </h4>
                                        <h5 class="collection-item__location-country">
                                            Spanien
                                        </h5>
                                    </div>
                                    <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                                </header>
                                <div class="collection-item__bottom">
                                    <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                                    <p class="collection-item__subtitles">
                                        <span class="collection-item__subtitle">Hotel name</span>
                                    </p>

                                    <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

                                    <div class="collection-item__trip-infos">
                                        <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                        <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                                    </div>

                                    <p class="collection-item__trip-price">
                                        <span class="collection-item__trip-price-prefix">ab</span>
                                        <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                        <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                                    </p>

                                    <a href="#" class="collection-item__button">
                                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                        zur Beschreibung
                                    </a>
                                </div>
                            </toujou-collection-item>
                        </li>
                        <li class="card-collection__item">
                            <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                                <header class="collection-item__top">
                                    <figure class="collection-item__figure">
                                        <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                    </figure>
                                    <div class="collection-item__categories">
                                        \${renderCardCategoryChips(['Neu', 'Rabatt'], 'primary')}
                                    </div>
                                    <div class="collection-item__location">
                                        <h4 class="collection-item__location-city">
                                            Marbella
                                        </h4>
                                        <h5 class="collection-item__location-country">
                                            Spanien
                                        </h5>
                                    </div>
                                    <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                                </header>
                                <div class="collection-item__bottom">
                                    <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                                    <p class="collection-item__subtitles">
                                        <span class="collection-item__subtitle">Hotel name</span>
                                    </p>

                                    <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

                                    <div class="collection-item__trip-infos">
                                        <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                        <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                                    </div>

                                    <p class="collection-item__trip-price">
                                        <span class="collection-item__trip-price-prefix">ab</span>
                                        <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                        <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                                    </p>

                                    <a href="#" class="collection-item__button">
                                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                        zur Beschreibung
                                    </a>
                                </div>
                            </toujou-collection-item>
                        </li>
                        <li class="card-collection__item">
                            <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                                <header class="collection-item__top">
                                    <figure class="collection-item__figure">
                                        <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                    </figure>
                                    <div class="collection-item__categories">
                                      \${renderCardCategoryChips(['Tutorials'], 'primary')}
                                    </div>
                                    <div class="collection-item__location">
                                        <h4 class="collection-item__location-city">
                                            Marbella
                                        </h4>
                                        <h5 class="collection-item__location-country">
                                            Spanien
                                        </h5>
                                    </div>
                                    <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                                </header>
                                <div class="collection-item__bottom">
                                    <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                                    <p class="collection-item__subtitles">
                                        <span class="collection-item__subtitle">Hotel name</span>
                                    </p>

                                    <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

                                    <div class="collection-item__trip-infos">
                                        <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                        <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                                    </div>

                                    <p class="collection-item__trip-price">
                                        <span class="collection-item__trip-price-prefix">ab</span>
                                        <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                        <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                                    </p>

                                    <a href="#" class="collection-item__button">
                                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                        zur Beschreibung
                                    </a>
                                </div>
                            </toujou-collection-item>
                        </li>
                        <li class="card-collection__item">
                            <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                                <header class="collection-item__top">
                                    <figure class="collection-item__figure">
                                        <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                    </figure>
                                    <div class="collection-item__categories">
                                        \${renderCardCategoryChips(['Tutorials'], 'primary')}
                                    </div>
                                    <div class="collection-item__location">
                                        <h4 class="collection-item__location-city">
                                            Marbella
                                        </h4>
                                        <h5 class="collection-item__location-country">
                                            Spanien
                                        </h5>
                                    </div>
                                    <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                                </header>
                                <div class="collection-item__bottom">
                                    <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                                    <p class="collection-item__subtitles">
                                        <span class="collection-item__subtitle">Hotel name</span>
                                    </p>

                                    <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

                                    <div class="collection-item__trip-infos">
                                        <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                        <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                                    </div>

                                    <p class="collection-item__trip-price">
                                        <span class="collection-item__trip-price-prefix">ab</span>
                                        <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                        <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                                    </p>

                                    <a href="#" class="collection-item__button">
                                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                        zur Beschreibung
                                    </a>
                                </div>
                            </toujou-collection-item>
                        </li>
                        <li class="card-collection__item">
                            <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                                <header class="collection-item__top">
                                    <figure class="collection-item__figure">
                                        <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                    </figure>
                                    <div class="collection-item__categories">
                                        \${renderCardCategoryChips(['Tutorials'], 'primary')}
                                    </div>
                                    <div class="collection-item__location">
                                        <h4 class="collection-item__location-city">
                                            Marbella
                                        </h4>
                                        <h5 class="collection-item__location-country">
                                            Spanien
                                        </h5>
                                    </div>
                                    <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                                </header>
                                <div class="collection-item__bottom">
                                    <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                                    <p class="collection-item__subtitles">
                                        <span class="collection-item__subtitle">Hotel name</span>
                                    </p>

                                    <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

                                    <div class="collection-item__trip-infos">
                                        <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                        <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                                    </div>

                                    <p class="collection-item__trip-price">
                                        <span class="collection-item__trip-price-prefix">ab</span>
                                        <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                        <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                                    </p>

                                    <a href="#" class="collection-item__button">
                                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                        zur Beschreibung
                                    </a>
                                </div>
                            </toujou-collection-item>
                        </li>
                        <li class="card-collection__item">
                            <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                                <header class="collection-item__top">
                                    <figure class="collection-item__figure">
                                        <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                    </figure>
                                    <div class="collection-item__categories">
                                        \${renderCardCategoryChips(['Tutorials'], 'primary')}
                                    </div>
                                    <div class="collection-item__location">
                                        <h4 class="collection-item__location-city">
                                            Marbella
                                        </h4>
                                        <h5 class="collection-item__location-country">
                                            Spanien
                                        </h5>
                                    </div>
                                    <toujou-fav-item class="fake-fav-item"></toujou-fav-item>
                                </header>
                                <div class="collection-item__bottom">
                                    <h3 class="collection-item__title">Musterreise: Svastha medizinische Spezialkur</h3>
                                    <p class="collection-item__subtitles">
                                        <span class="collection-item__subtitle">Hotel name</span>
                                    </p>

                                    <p class="collection-item__abstract">Wie Sie ein Kontaktformular (und andere Onlineformulare) erstellen, worauf aus DSGVO-Sicht und für den Spamschutz zu achten ist: Das erläutern wir in diesem Blogartikel.</p>

                                    <div class="collection-item__trip-infos">
                                        <p class="collection-item__trip-info">14 Tage Gruppenreise</p>
                                        <p class="collection-item__trip-info">1 bis 8 Teilnehmner</p>
                                    </div>

                                    <p class="collection-item__trip-price">
                                        <span class="collection-item__trip-price-prefix">ab</span>
                                        <span class="collection-item__trip-price-amount">1.500,00 €</span>
                                        <span class="collection-item__trip-price-suffix">(inkl. Flug)</span>
                                    </p>

                                    <a href="#" class="collection-item__button">
                                        <toujou-icon class="icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                        zur Beschreibung
                                    </a>
                                </div>
                            </toujou-collection-item>
                        </li>
                    </ul>

                    <ul class="solr-pagination solr-pagination--below">
                        <li class="solr-pagination__item solr-pagination__item--last solr-pagination__item--next ">
                            <a href="#" class="button solr-ajaxified solr-pagination__button solr-pagination__link solr-pagination__link--arrow solr-pagination__link--prev">
                                <toujou-icon class="icon" icon-color="primary" icon-size="normal" icon-name="chevron-left"></toujou-icon>
                            </a>
                        </li>
                        <li class="solr-pagination__pages-container">
                            <div class="solr-pagination__pages solr-pagination__pages--mobile">
                                <div class="select__wrapper solr-pagination__select-wrapper">
                                    <form method="post" id="paginationSelectForm" action="/suche/?tx_solr%5Bq%5D=">
                                        <toujou-input-group class="input-group input-group--single-select   ">
                                            <div class="select__wrapper solr-pagination__select-wrapper">
                                                <select data-pristine-required-message-de="The given subject was empty." class="form-control input select solr-pagination__select" id="testform-1000091-singleselect-1" name="tx_form_formframework[testform-1000091][singleselect-1]" name="tx_solr[page]" onchange="this.form.submit()">
                                                    <option class="seclect__option" value="">1</option>
                                                    <option class="seclect__option" value="2">2</option>
                                                    <option class="seclect__option" value="3">3</option>
                                                    <option class="seclect__option" value="4">4</option>
                                                    <option class="seclect__option" value="5">5</option>
                                                </select>
                                            </div>
                                            <span class="pristine-error form__error">This is an error message!</span>
                                        </toujou-input-group>
                                    </form>
                                </div>
                                <span class="solr-pagination__select-postfix">von</span>
                            </div>
                            <ul class="solr-pagination__pages solr-pagination__pages--desktop">
                                <li class="solr-pagination__item solr-pagination__item--active">
                                    <a href="/suche/?tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link solr-pagination__link--active">1</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=2&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">2</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=3&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">3</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=4&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">4</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=5&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">5</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=6&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">6</a>
                                </li>
                                <li class="solr-pagination__item">
                                    <a href="/suche/?tx_solr%5Bpage%5D=7&amp;tx_solr%5Bq%5D=" class="solr-ajaxified solr-pagination__link">7</a>
                                </li>
                                <li class="solr-pagination__item solr-pagination__item--ellipsis">
                                    <a class="solr-pagination__link">...</a>
                                </li>
                            </ul>
                        </li>
                        <li class="solr-pagination__item solr-pagination__item--last solr-pagination__item--next ">
                            <a href="#" class="button solr-ajaxified solr-pagination__button solr-pagination__link solr-pagination__link--arrow solr-pagination__link--prev">
                                <toujou-icon class="icon" icon-color="primary" icon-size="normal" icon-name="chevron-right"></toujou-icon>
                            </a>
                        </li>
                    </ul>
                </div>
                <!---->
            </toujou-solr-search>
        </main>
     \`;
}`,...(n=(c=i.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const x=["SolrSearch"];export{i as SolrSearch,x as __namedExportsOrder,v as default};
