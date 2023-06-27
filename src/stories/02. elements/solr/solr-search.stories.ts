import { Story, Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'
// @ts-ignore
import solrSearchDocs from "./solr-search.docs.mdx";

export default {
    title: 'COMPONENTS/solr',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: solrSearchDocs,
        }
    },
    argTypes: {},
    tags: ['autodocs']
} as Meta;

interface SolrSearchStoryProps {
}

const Template: Story<SolrSearchStoryProps> = (args: SolrSearchStoryProps) => {
    return `
        <toujou-solr-search class="solr" view-mode="grid">
            <div id="solr-filters" class="solr-filters">
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
                        <p class="solr-facets-in-use__no-filters">
                            Noch keine Filter ausgewählt
                        </p>
                    </div>
                </div>
                <div class="solr-facets">
                    <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-destination">
                        <div class="panel">
                            <div class="panel-heading">
                                <h3 class="facet-label panel-title">
                                    <a data-toggle="collapse" data-parent="#facet-accordiondestination" href="#facetdestination">Land</a>
                                </h3>
                            </div>
                            <div class="facet-option-list facet-type-options fluidfacet list-group panel-collapse collapse" data-facet-name="destination" data-facet-label="Land" id="facetdestination">
                                <div class="facet-option list-group-item" data-facet-item-value="1">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-destination-option-1" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-destination-option-1" name="tx_solr[filter][]" value="destination:1" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A1&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Azoren <span class="facet-result-count badge">228</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="4">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-destination-option-4" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-destination-option-4" name="tx_solr[filter][]" value="destination:4" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A4&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Madeira <span class="facet-result-count badge">63</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="7">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-destination-option-7" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-destination-option-7" name="tx_solr[filter][]" value="destination:7" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A7&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Irland <span class="facet-result-count badge">62</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="3">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-destination-option-3" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-destination-option-3" name="tx_solr[filter][]" value="destination:3" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A3&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Kanaren <span class="facet-result-count badge">49</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="5">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-destination-option-5" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-destination-option-5" name="tx_solr[filter][]" value="destination:5" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A5&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Kapverden <span class="facet-result-count badge">38</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="2">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-destination-option-2" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-destination-option-2" name="tx_solr[filter][]" value="destination:2" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=destination%3A2&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Lissabon <span class="facet-result-count badge">6</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-type">
                        <div class="panel">
                            <div class="panel-heading">
                                <h3 class="facet-label panel-title">
                                    <a data-toggle="collapse" data-parent="#facet-accordiontype" href="#facettype">Typ</a>
                                </h3>
                            </div>
                            <div class="facet-option-list facet-type-options fluidfacet list-group panel-collapse collapse" data-facet-name="type" data-facet-label="Typ" id="facettype">
                                <div class="facet-option list-group-item" data-facet-item-value="tx_neustafacilities_domain_model_facility">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-type-option-tx_neustafacilities_domain_model_facility" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-type-option-tx_neustafacilities_domain_model_facility" name="tx_solr[filter][]" value="type:tx_neustafacilities_domain_model_facility" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=type%3Atx_neustafacilities_domain_model_facility&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Unterkünfte <span class="facet-result-count badge">355</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="tx_neustatrips_domain_model_trip">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-type-option-tx_neustatrips_domain_model_trip" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-type-option-tx_neustatrips_domain_model_trip" name="tx_solr[filter][]" value="type:tx_neustatrips_domain_model_trip" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=type%3Atx_neustatrips_domain_model_trip&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Rundreisen <span class="facet-result-count badge">57</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="tx_neustaadventures_domain_model_adventure">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-type-option-tx_neustaadventures_domain_model_adventure" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-type-option-tx_neustaadventures_domain_model_adventure" name="tx_solr[filter][]" value="type:tx_neustaadventures_domain_model_adventure" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=type%3Atx_neustaadventures_domain_model_adventure&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Erlebnisse <span class="facet-result-count badge">34</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-duration">
                        <div class="panel">
                            <div class="panel-heading">
                                <h3 class="facet-label panel-title">
                                    <a data-toggle="collapse" data-parent="#facet-accordionduration" href="#facetduration">Dauer</a>
                                </h3>
                            </div>
                            <div class="facet-option-list facet-type-options fluidfacet list-group panel-collapse collapse" data-facet-name="duration" data-facet-label="Dauer" id="facetduration">
                                <div class="facet-option list-group-item" data-facet-item-value="15">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-duration-option-15" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-duration-option-15" name="tx_solr[filter][]" value="duration:15" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=duration%3A15&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">15 Tage <span class="facet-result-count badge">30</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="12">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-duration-option-12" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-duration-option-12" name="tx_solr[filter][]" value="duration:12" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=duration%3A12&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">12 Tage <span class="facet-result-count badge">12</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="8">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-duration-option-8" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-duration-option-8" name="tx_solr[filter][]" value="duration:8" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=duration%3A8&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">8 Tage <span class="facet-result-count badge">11</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="10">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-duration-option-10" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-duration-option-10" name="tx_solr[filter][]" value="duration:10" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=duration%3A10&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">10 Tage <span class="facet-result-count badge">2</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="11">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-duration-option-11" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-duration-option-11" name="tx_solr[filter][]" value="duration:11" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=duration%3A11&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">11 Tage <span class="facet-result-count badge">1</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="21">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-duration-option-21" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-duration-option-21" name="tx_solr[filter][]" value="duration:21" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=duration%3A21&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">21 Tage <span class="facet-result-count badge">1</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-accommodation">
                        <div class="panel">
                            <div class="panel-heading">
                                <h3 class="facet-label panel-title">
                                    <a data-toggle="collapse" data-parent="#facet-accordionaccommodation" href="#facetaccommodation">Art der Unterkunft</a>
                                </h3>
                            </div>
                            <div class="facet-option-list facet-type-options fluidfacet list-group panel-collapse collapse" data-facet-name="accommodation" data-facet-label="Art der Unterkunft" id="facetaccommodation">
                                <div class="facet-option list-group-item" data-facet-item-value="12">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-accommodation-option-12" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-accommodation-option-12" name="tx_solr[filter][]" value="accommodation:12" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=accommodation%3A12&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Hotel <span class="facet-result-count badge">143</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="33">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-accommodation-option-33" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-accommodation-option-33" name="tx_solr[filter][]" value="accommodation:33" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=accommodation%3A33&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Ferienhaus <span class="facet-result-count badge">80</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="24">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-accommodation-option-24" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-accommodation-option-24" name="tx_solr[filter][]" value="accommodation:24" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=accommodation%3A24&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Gästehaus <span class="facet-result-count badge">37</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="19">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-accommodation-option-19" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-accommodation-option-19" name="tx_solr[filter][]" value="accommodation:19" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=accommodation%3A19&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Apartment <span class="facet-result-count badge">33</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="94">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-accommodation-option-94" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-accommodation-option-94" name="tx_solr[filter][]" value="accommodation:94" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=accommodation%3A94&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">B&amp;B <span class="facet-result-count badge">26</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="39">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-accommodation-option-39" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-accommodation-option-39" name="tx_solr[filter][]" value="accommodation:39" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=accommodation%3A39&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Landhaus <span class="facet-result-count badge">10</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="22">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-accommodation-option-22" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-accommodation-option-22" name="tx_solr[filter][]" value="accommodation:22" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=accommodation%3A22&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Landhotel <span class="facet-result-count badge">9</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="36">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-accommodation-option-36" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-accommodation-option-36" name="tx_solr[filter][]" value="accommodation:36" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=accommodation%3A36&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Residencial <span class="facet-result-count badge">6</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="46">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-accommodation-option-46" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-accommodation-option-46" name="tx_solr[filter][]" value="accommodation:46" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=accommodation%3A46&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Ecolodge <span class="facet-result-count badge">5</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="91">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-accommodation-option-91" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-accommodation-option-91" name="tx_solr[filter][]" value="accommodation:91" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=accommodation%3A91&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Manor House <span class="facet-result-count badge">4</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="92">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-accommodation-option-92" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-accommodation-option-92" name="tx_solr[filter][]" value="accommodation:92" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=accommodation%3A92&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Castle <span class="facet-result-count badge">2</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-islands">
                        <div class="panel">
                            <div class="panel-heading">
                                <h3 class="facet-label panel-title">
                                    <a data-toggle="collapse" data-parent="#facet-accordionislands" href="#facetislands">Region</a>
                                </h3>
                            </div>
                            <div class="facet-option-list facet-type-options fluidfacet list-group panel-collapse collapse" data-facet-name="islands" data-facet-label="Region" id="facetislands">
                                <div class="facet-option list-group-item" data-facet-item-value="3">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-3" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-3" name="tx_solr[filter][]" value="islands:3" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A3&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">São Miguel <span class="facet-result-count badge">100</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="4">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-4" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-4" name="tx_solr[filter][]" value="islands:4" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A4&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Pico <span class="facet-result-count badge">71</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="35">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-35" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-35" name="tx_solr[filter][]" value="islands:35" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A35&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Madeira <span class="facet-result-count badge">60</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="6">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-6" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-6" name="tx_solr[filter][]" value="islands:6" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A6&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Faial <span class="facet-result-count badge">43</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="50">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-50" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-50" name="tx_solr[filter][]" value="islands:50" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A50&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Terceira <span class="facet-result-count badge">21</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="31">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-31" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-31" name="tx_solr[filter][]" value="islands:31" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A31&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">La Gomera <span class="facet-result-count badge">17</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="97">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-97" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-97" name="tx_solr[filter][]" value="islands:97" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A97&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Co. Kerry <span class="facet-result-count badge">15</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="28">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-28" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-28" name="tx_solr[filter][]" value="islands:28" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A28&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Teneriffa <span class="facet-result-count badge">14</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="5">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-5" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-5" name="tx_solr[filter][]" value="islands:5" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A5&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">São Jorge <span class="facet-result-count badge">13</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="49">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-49" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-49" name="tx_solr[filter][]" value="islands:49" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A49&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Flores <span class="facet-result-count badge">10</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="99">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-99" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-99" name="tx_solr[filter][]" value="islands:99" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A99&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Co. Cork <span class="facet-result-count badge">10</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="25">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-25" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-25" name="tx_solr[filter][]" value="islands:25" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A25&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Gran Canaria <span class="facet-result-count badge">9</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="34">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-34" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-34" name="tx_solr[filter][]" value="islands:34" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A34&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">La Palma <span class="facet-result-count badge">9</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="40">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-40" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-40" name="tx_solr[filter][]" value="islands:40" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A40&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Santo Antão <span class="facet-result-count badge">9</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="90">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-90" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-90" name="tx_solr[filter][]" value="islands:90" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A90&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Irland <span class="facet-result-count badge">9</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="41">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-41" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-41" name="tx_solr[filter][]" value="islands:41" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A41&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">São Vicente <span class="facet-result-count badge">8</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="42">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-42" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-42" name="tx_solr[filter][]" value="islands:42" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A42&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Santiago <span class="facet-result-count badge">8</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="48">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-48" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-48" name="tx_solr[filter][]" value="islands:48" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A48&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Santa Maria <span class="facet-result-count badge">8</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="11">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-11" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-11" name="tx_solr[filter][]" value="islands:11" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A11&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Lissabon <span class="facet-result-count badge">7</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="21">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-21" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-21" name="tx_solr[filter][]" value="islands:21" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A21&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Lanzarote <span class="facet-result-count badge">7</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="45">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-45" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-45" name="tx_solr[filter][]" value="islands:45" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A45&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Fogo <span class="facet-result-count badge">6</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="96">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-96" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-96" name="tx_solr[filter][]" value="islands:96" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A96&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Co. Mayo <span class="facet-result-count badge">6</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="52">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-52" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-52" name="tx_solr[filter][]" value="islands:52" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A52&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Graciosa <span class="facet-result-count badge">5</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="101">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-101" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-101" name="tx_solr[filter][]" value="islands:101" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A101&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Co. Galway <span class="facet-result-count badge">5</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="102">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-102" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-102" name="tx_solr[filter][]" value="islands:102" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A102&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Co. Donegal <span class="facet-result-count badge">5</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="27">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-27" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-27" name="tx_solr[filter][]" value="islands:27" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A27&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">El Hierro <span class="facet-result-count badge">4</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="38">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-38" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-38" name="tx_solr[filter][]" value="islands:38" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A38&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Porto Santo <span class="facet-result-count badge">4</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="43">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-43" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-43" name="tx_solr[filter][]" value="islands:43" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A43&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Boavista <span class="facet-result-count badge">4</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="44">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-44" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-44" name="tx_solr[filter][]" value="islands:44" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A44&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Sal <span class="facet-result-count badge">4</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="104">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-104" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-104" name="tx_solr[filter][]" value="islands:104" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A104&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Co. Dublin <span class="facet-result-count badge">4</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="23">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-23" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-23" name="tx_solr[filter][]" value="islands:23" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A23&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Fuerteventura <span class="facet-result-count badge">3</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="51">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-51" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-51" name="tx_solr[filter][]" value="islands:51" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A51&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Corvo <span class="facet-result-count badge">3</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="56">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-56" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-56" name="tx_solr[filter][]" value="islands:56" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A56&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Brava <span class="facet-result-count badge">3</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="98">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-98" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-98" name="tx_solr[filter][]" value="islands:98" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A98&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Co. Clare <span class="facet-result-count badge">3</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="100">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-100" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-100" name="tx_solr[filter][]" value="islands:100" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A100&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Co. Limerick <span class="facet-result-count badge">2</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="103">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-103" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-103" name="tx_solr[filter][]" value="islands:103" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A103&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Co. Antrim <span class="facet-result-count badge">2</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="106">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-islands-option-106" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-islands-option-106" name="tx_solr[filter][]" value="islands:106" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=islands%3A106&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Co. Derry <span class="facet-result-count badge">1</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-features">
                        <div class="panel">
                            <div class="panel-heading">
                                <h3 class="facet-label panel-title">
                                    <a data-toggle="collapse" data-parent="#facet-accordionfeatures" href="#facetfeatures">Ausstattung</a>
                                </h3>
                            </div>
                            <div class="facet-option-list facet-type-options fluidfacet list-group panel-collapse collapse" data-facet-name="features" data-facet-label="Ausstattung" id="facetfeatures">
                                <div class="facet-option list-group-item" data-facet-item-value="13">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-features-option-13" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-features-option-13" name="tx_solr[filter][]" value="features:13" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=features%3A13&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">WLAN <span class="facet-result-count badge">315</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="87">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-features-option-87" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-features-option-87" name="tx_solr[filter][]" value="features:87" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=features%3A87&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Pool <span class="facet-result-count badge">149</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="37">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-features-option-37" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-features-option-37" name="tx_solr[filter][]" value="features:37" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=features%3A37&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Meerblick <span class="facet-result-count badge">140</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="7">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-features-option-7" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-features-option-7" name="tx_solr[filter][]" value="features:7" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=features%3A7&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Klimaanlage <span class="facet-result-count badge">121</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="88">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-features-option-88" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-features-option-88" name="tx_solr[filter][]" value="features:88" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=features%3A88&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">4-Sterne <span class="facet-result-count badge">77</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="89">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-features-option-89" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-features-option-89" name="tx_solr[filter][]" value="features:89" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=features%3A89&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">5-Sterne <span class="facet-result-count badge">6</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="solr-facets__facet facet facet-type facet-type-options" id="facet-accordion-topic">
                        <div class="panel">
                            <div class="panel-heading">
                                <h3 class="facet-label panel-title">
                                    <a data-toggle="collapse" data-parent="#facet-accordiontopic" href="#facettopic">Art</a>
                                </h3>
                            </div>
                            <div class="facet-option-list facet-type-options fluidfacet list-group panel-collapse collapse" data-facet-name="topic" data-facet-label="Art" id="facettopic">
                                <div class="facet-option list-group-item" data-facet-item-value="58">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-58" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-58" name="tx_solr[filter][]" value="topic:58" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A58&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Wanderreisen <span class="facet-result-count badge">25</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="57">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-57" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-57" name="tx_solr[filter][]" value="topic:57" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A57&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Rundreisen <span class="facet-result-count badge">22</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="108">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-108" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-108" name="tx_solr[filter][]" value="topic:108" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A108&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Whalewatching <span class="facet-result-count badge">11</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="107">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-107" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-107" name="tx_solr[filter][]" value="topic:107" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A107&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Geführte Ausflüge <span class="facet-result-count badge">8</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="54">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-54" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-54" name="tx_solr[filter][]" value="topic:54" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A54&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Wale / Delfine <span class="facet-result-count badge">5</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="1">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-1" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-1" name="tx_solr[filter][]" value="topic:1" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A1&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Aktivreisen <span class="facet-result-count badge">4</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="55">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-55" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-55" name="tx_solr[filter][]" value="topic:55" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A55&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Wandern <span class="facet-result-count badge">4</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="93">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-93" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-93" name="tx_solr[filter][]" value="topic:93" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A93&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Familienreisen <span class="facet-result-count badge">4</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="109">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-109" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-109" name="tx_solr[filter][]" value="topic:109" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A109&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Schwimmen mit Delfinen <span class="facet-result-count badge">4</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option list-group-item" data-facet-item-value="115">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-115" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-115" name="tx_solr[filter][]" value="topic:115" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A115&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Vogelbeobachtung <span class="facet-result-count badge">4</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="113">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-113" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-113" name="tx_solr[filter][]" value="topic:113" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A113&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Golfen <span class="facet-result-count badge">2</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="116">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-116" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-116" name="tx_solr[filter][]" value="topic:116" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A116&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Kanufahren <span class="facet-result-count badge">2</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="facet-option tx-solr-facet-hidden list-group-item" data-facet-item-value="118">
                                    <div class="input-group input-group--checkbox input-group--no-padding">
                                        <div class="checkbox-group">
                                            <label for="facet-topic-option-118" class="checkbox-group__label">
                                            <input type="checkbox" class="checkbox checkbox--single facet-item solr-ajaxified" id="facet-topic-option-118" name="tx_solr[filter][]" value="topic:118" data-url="/suche/?tx_solr%5Bfilter%5D%5B0%5D=topic%3A118&amp;tx_solr%5Bq%5D=">
                                            <span class="checkbox__description">Bootsausflug <span class="facet-result-count badge">1</span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
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
                        <toujou-button class="button" type="submit" button-size="normal" button-variant="primary">Suchen</toujou-button>
                    </toujou-input-group>
                </form>
                <button class="button button--primary solr-filter-button">
                <span class="solr-filter-button__icon"></span>
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
                        <div class="button solr-view-mode__button solr-view-mode__button--grid" data-view-mode="grid" role="radio" aria-checked="true" tabindex="0">
                            <span class="solr-view-mode__button-icon"></span>
                            Raster
                        </div>
                        <div class="button solr-view-mode__button solr-view-mode__button--map" data-view-mode="map" role="radio" aria-checked="false" tabindex="-1">
                            <span class="solr-view-mode__button-icon"></span>
                            Karte
                        </div>
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
                
                <ul class="card-collection">
                    <li class="card-collection__item">
                        <toujou-collection-item class="collection-item" item-type="trip" element-design="default" item-orientation="vertical" role="article">
                            <header class="collection-item__top">
                                <figure class="collection-item__figure">
                                    <img src="https://picsum.photos/640" alt="nice image" class="collection-item__image">
                                </figure>
                                <div class="collection-item__categories">
                                    <a href="#" class="collection-item__category">
                                        <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                        Neu
                                    </a>
                                    <a href="#" class="collection-item__category">
                                        <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                        Jetzt 30% Rabatt
                                    </a>
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
                                    <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                                    <a href="#" class="collection-item__category">
                                        <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                        Neu
                                    </a>
                                    <a href="#" class="collection-item__category">
                                        <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                        Jetzt 30% Rabatt
                                    </a>
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
                                    <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                                    <a href="#" class="collection-item__category">
                                        <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                        Neu
                                    </a>
                                    <a href="#" class="collection-item__category">
                                        <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                        Jetzt 30% Rabatt
                                    </a>
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
                                    <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
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
                                    <a href="#" class="collection-item__category">
                                        <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                        Neu
                                    </a>
                                    <a href="#" class="collection-item__category">
                                        <toujou-icon class="icon collection-item__icon" icon-name="bookmark-filled" icon-size="normal" icon-color="font"></toujou-icon>
                                        Jetzt 30% Rabatt
                                    </a>
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
                                    <toujou-icon class="icon button__icon" icon-name="arrow-right" icon-size="ms"></toujou-icon>
                                    zur Beschreibung
                                </a>
                            </div>
                        </toujou-collection-item>
                    </li>
                </ul>
                
                
                
                
                
                
                <ol class="item-list item-list--solr item-list--cards" data-start="1">
                    <div class="list-group-item search-result results-entry" data-document-score="1" data-document-id="1ba72943a851232127579e12d88bdd4327fe0a9d/tx_neustatrips_domain_model_trip/14" data-document-url="">
                        
                        
                        
                        
                        
                        
                        
                        
                        <toujou-card class="toujou-card toujou-card--trip" element-design="default">
                            <a href="https://www.seabreeze.travel/kanaren/rundreise/die-klassische-kanaren-rundreise/" class="toujou-card__title-link">
                                <div class="toujou-card__top">
                                    <figure class="toujou-card__figure">
                                        <img class="toujou-card__image" src="/fileadmin/_processed_/7/7/csm_klassische-rundreise-kanaren-01_bb8e4bb446.jpg" width="1920" height="1080" data-width="1920" data-height="1080" alt="" loading="lazy">
                                    </figure>
                                    <div class="toujou-card__top-content">
                                        <p class="toujou-card__top-infos">
                                            12 
                                            Tage
                                            <span class="toujou-card__top-infos-separator">|</span>
                                            Individual
                                        </p>
                                        <h3 class="toujou-card__title">Die klassische Kanaren-Rundreise</h3>
                                        <p class="toujou-card__destination">Kanaren</p>
                                    </div>
                                </div>
                                <div class="toujou-card__bottom">
                                    <p class="toujou-card__description">Gran Canaria, La Gomera und Teneriffa</p>
                                    <p class="toujou-card__price">
                                        pro Person ab <span class="toujou-card__price-amount">1.040 €</span>
                                    </p>
                                </div>
                            </a>
                        </toujou-card>
                    </div>
                    <div class="list-group-item search-result results-entry" data-document-score="1" data-document-id="1ba72943a851232127579e12d88bdd4327fe0a9d/tx_neustatrips_domain_model_trip/13" data-document-url="">
                        <toujou-card class="toujou-card toujou-card--trip" element-design="default">
                            <a href="https://www.seabreeze.travel/kapverden/rundreise/santo-antao-auf-alten-pfaden/" class="toujou-card__title-link">
                                <div class="toujou-card__top">
                                    <figure class="toujou-card__figure">
                                        <img class="toujou-card__image" src="/fileadmin/_processed_/9/a/csm_santoantao-wandern-kapverden-01_6e7a0de9f3.jpg" width="1608" height="904" data-width="1608" data-height="904" alt="" loading="lazy">
                                    </figure>
                                    <div class="toujou-card__top-content">
                                        <p class="toujou-card__top-infos">
                                            15 
                                            Tage
                                            <span class="toujou-card__top-infos-separator">|</span>
                                            Individual
                                        </p>
                                        <h3 class="toujou-card__title">Santo Antão - auf alten Pfaden</h3>
                                        <p class="toujou-card__destination">Kapverden</p>
                                    </div>
                                </div>
                                <div class="toujou-card__bottom">
                                    <p class="toujou-card__description">Das Wanderparadies kombiniert mit São Vicente</p>
                                    <p class="toujou-card__price">
                                        pro Person ab <span class="toujou-card__price-amount">690 €</span>
                                    </p>
                                </div>
                            </a>
                        </toujou-card>
                    </div>
                    <div class="list-group-item search-result results-entry" data-document-score="1" data-document-id="1ba72943a851232127579e12d88bdd4327fe0a9d/tx_neustatrips_domain_model_trip/9" data-document-url="">
                        <toujou-card class="toujou-card toujou-card--trip" element-design="default">
                            <a href="https://www.seabreeze.travel/azoren/rundreise/wandern-und-erholen-im-triangulo/" class="toujou-card__title-link">
                                <div class="toujou-card__top">
                                    <figure class="toujou-card__figure">
                                        <img class="toujou-card__image" src="/fileadmin/_processed_/4/b/csm_faial-pico-saojorge-wandern-azoren-01_eca310c748.jpg" width="1920" height="1080" data-width="1920" data-height="1080" alt="" loading="lazy">
                                    </figure>
                                    <div class="toujou-card__top-content">
                                        <p class="toujou-card__top-infos">
                                            15 
                                            Tage
                                            <span class="toujou-card__top-infos-separator">|</span>
                                            Individual
                                        </p>
                                        <h3 class="toujou-card__title">Wandern und Erholen im Triângulo</h3>
                                        <p class="toujou-card__destination">Azoren</p>
                                    </div>
                                </div>
                                <div class="toujou-card__bottom">
                                    <p class="toujou-card__description">3 Inseln der Azoren - Faial, São Jorge und Pico</p>
                                    <p class="toujou-card__price">
                                        pro Person ab <span class="toujou-card__price-amount">930 €</span>
                                    </p>
                                </div>
                            </a>
                        </toujou-card>
                    </div>
                    <div class="list-group-item search-result results-entry" data-document-score="1" data-document-id="1ba72943a851232127579e12d88bdd4327fe0a9d/tx_neustatrips_domain_model_trip/8" data-document-url="">
                        <toujou-card class="toujou-card toujou-card--trip" element-design="default">
                            <a href="https://www.seabreeze.travel/azoren/rundreise/wanderlust-in-gruenen-vulkanlandschaften/" class="toujou-card__title-link">
                                <div class="toujou-card__top">
                                    <figure class="toujou-card__figure">
                                        <img class="toujou-card__image" src="/fileadmin/_processed_/5/e/csm_faial-pico-terceira-sao-jorge-azoren-01_bc45760037.jpg" width="1920" height="1080" data-width="1920" data-height="1080" alt="" loading="lazy">
                                    </figure>
                                    <div class="toujou-card__top-content">
                                        <p class="toujou-card__top-infos">
                                            12 
                                            Tage
                                            <span class="toujou-card__top-infos-separator">|</span>
                                            Individual
                                        </p>
                                        <h3 class="toujou-card__title">Wanderlust in grünen Vulkanlandschaften</h3>
                                        <p class="toujou-card__destination">Azoren</p>
                                    </div>
                                </div>
                                <div class="toujou-card__bottom">
                                    <p class="toujou-card__description">Faial, Pico, São Jorge und Terceira</p>
                                    <p class="toujou-card__price">
                                        pro Person ab <span class="toujou-card__price-amount">785 €</span>
                                    </p>
                                </div>
                            </a>
                        </toujou-card>
                    </div>
                    <div class="list-group-item search-result results-entry" data-document-score="1" data-document-id="1ba72943a851232127579e12d88bdd4327fe0a9d/tx_neustatrips_domain_model_trip/7" data-document-url="">
                        <toujou-card class="toujou-card toujou-card--trip" element-design="default">
                            <a href="https://www.seabreeze.travel/azoren/rundreise/von-walfaengern-zu-walschuetzern/" class="toujou-card__title-link">
                                <div class="toujou-card__top">
                                    <figure class="toujou-card__figure">
                                        <img class="toujou-card__image" src="/fileadmin/_processed_/d/4/csm_wale-pico-saomiguel-faial-azoren-01_0fa76ae358.jpg" width="1417" height="797" data-width="1417" data-height="797" alt="" loading="lazy">
                                    </figure>
                                    <div class="toujou-card__top-content">
                                        <p class="toujou-card__top-infos">
                                            15 
                                            Tage
                                            <span class="toujou-card__top-infos-separator">|</span>
                                            Individual
                                        </p>
                                        <h3 class="toujou-card__title">Von Walfängern zu Walschützern</h3>
                                        <p class="toujou-card__destination">Azoren</p>
                                    </div>
                                </div>
                                <div class="toujou-card__bottom">
                                    <p class="toujou-card__description">Azoren-Rundreise nach São Miguel, Pico und Faial</p>
                                    <p class="toujou-card__price">
                                        pro Person ab <span class="toujou-card__price-amount">1.230 €</span>
                                    </p>
                                </div>
                            </a>
                        </toujou-card>
                    </div>
                    <div class="list-group-item search-result results-entry" data-document-score="1" data-document-id="1ba72943a851232127579e12d88bdd4327fe0a9d/tx_neustatrips_domain_model_trip/6" data-document-url="">
                        <toujou-card class="toujou-card toujou-card--trip" element-design="default">
                            <a href="https://www.seabreeze.travel/azoren/rundreise/wandern-und-erholen-auf-sao-miguel/" class="toujou-card__title-link">
                                <div class="toujou-card__top">
                                    <figure class="toujou-card__figure">
                                        <img class="toujou-card__image" src="/fileadmin/_processed_/b/0/csm_wandern-saomiguel-azoren-01_86488d36a7.jpg" width="1920" height="1080" data-width="1920" data-height="1080" alt="" loading="lazy">
                                    </figure>
                                    <div class="toujou-card__top-content">
                                        <p class="toujou-card__top-infos">
                                            12 
                                            Tage
                                            <span class="toujou-card__top-infos-separator">|</span>
                                            Individual
                                        </p>
                                        <h3 class="toujou-card__title">Wandern und Erholen auf São Miguel</h3>
                                        <p class="toujou-card__destination">Azoren</p>
                                    </div>
                                </div>
                                <div class="toujou-card__bottom">
                                    <p class="toujou-card__description">12 Tage auf Hauptinsel der Azoren</p>
                                    <p class="toujou-card__price">
                                        pro Person ab <span class="toujou-card__price-amount">740 €</span>
                                    </p>
                                </div>
                            </a>
                        </toujou-card>
                    </div>
                    <div class="list-group-item search-result results-entry" data-document-score="1" data-document-id="1ba72943a851232127579e12d88bdd4327fe0a9d/tx_neustatrips_domain_model_trip/5" data-document-url="">
                        <toujou-card class="toujou-card toujou-card--trip" element-design="default">
                            <a href="https://www.seabreeze.travel/azoren/rundreise/azoren-wandern-und-erholen-best-of/" class="toujou-card__title-link">
                                <div class="toujou-card__top">
                                    <figure class="toujou-card__figure">
                                        <img class="toujou-card__image" src="/fileadmin/_processed_/0/8/csm_saomiguel-pico-faial-terceira-azoren-01_073ce40705.jpg" width="1920" height="1081" data-width="1920" data-height="1081" alt="" loading="lazy">
                                    </figure>
                                    <div class="toujou-card__top-content">
                                        <p class="toujou-card__top-infos">
                                            15 
                                            Tage
                                            <span class="toujou-card__top-infos-separator">|</span>
                                            Individual
                                        </p>
                                        <h3 class="toujou-card__title">Azoren - Wandern und Erholen Best of</h3>
                                        <p class="toujou-card__destination">Azoren</p>
                                    </div>
                                </div>
                                <div class="toujou-card__bottom">
                                    <p class="toujou-card__description">Auf den Azoreninseln São Miguel, Faial, Pico, Terceira </p>
                                    <p class="toujou-card__price">
                                        pro Person ab <span class="toujou-card__price-amount">1.120 €</span>
                                    </p>
                                </div>
                            </a>
                        </toujou-card>
                    </div>
                    <div class="list-group-item search-result results-entry" data-document-score="1" data-document-id="1ba72943a851232127579e12d88bdd4327fe0a9d/tx_neustatrips_domain_model_trip/4" data-document-url="">
                        <toujou-card class="toujou-card toujou-card--trip" element-design="default">
                            <a href="https://www.seabreeze.travel/azoren/rundreise/wandern-und-erholen-auf-2-inseln-der-azoren/" class="toujou-card__title-link">
                                <div class="toujou-card__top">
                                    <figure class="toujou-card__figure">
                                        <img class="toujou-card__image" src="/fileadmin/_processed_/0/f/csm_wandern-saojorge-saomiguel-azoren-01_ad52da02fe.jpg" width="1888" height="1063" data-width="1888" data-height="1063" alt="" loading="lazy">
                                    </figure>
                                    <div class="toujou-card__top-content">
                                        <p class="toujou-card__top-infos">
                                            15 
                                            Tage
                                            <span class="toujou-card__top-infos-separator">|</span>
                                            Individual
                                        </p>
                                        <h3 class="toujou-card__title">Wandern und Erholen auf 2 Inseln der Azoren</h3>
                                        <p class="toujou-card__destination">Azoren</p>
                                    </div>
                                </div>
                                <div class="toujou-card__bottom">
                                    <p class="toujou-card__description">Inselkombination São Miguel und São Jorge</p>
                                    <p class="toujou-card__price">
                                        pro Person ab <span class="toujou-card__price-amount">1.120 €</span>
                                    </p>
                                </div>
                            </a>
                        </toujou-card>
                    </div>
                    <div class="list-group-item search-result results-entry" data-document-score="1" data-document-id="1ba72943a851232127579e12d88bdd4327fe0a9d/tx_neustatrips_domain_model_trip/3" data-document-url="">
                        <toujou-card class="toujou-card toujou-card--trip" element-design="default">
                            <a href="https://www.seabreeze.travel/azoren/rundreise/wandern-und-erholen-auf-2-azoreninseln/" class="toujou-card__title-link">
                                <div class="toujou-card__top">
                                    <figure class="toujou-card__figure">
                                        <img class="toujou-card__image" src="/fileadmin/_processed_/7/2/csm_wandern-flores-saomiguel-azoren-01_f42f12887e.jpg" width="1888" height="1063" data-width="1888" data-height="1063" alt="" loading="lazy">
                                    </figure>
                                    <div class="toujou-card__top-content">
                                        <p class="toujou-card__top-infos">
                                            15 
                                            Tage
                                            <span class="toujou-card__top-infos-separator">|</span>
                                            Individual
                                        </p>
                                        <h3 class="toujou-card__title">Wandern und Erholen auf 2 Azoreninseln</h3>
                                        <p class="toujou-card__destination">Azoren</p>
                                    </div>
                                </div>
                                <div class="toujou-card__bottom">
                                    <p class="toujou-card__description">Inselkombination São Miguel und Flores</p>
                                    <p class="toujou-card__price">
                                        pro Person ab <span class="toujou-card__price-amount">1.130 €</span>
                                    </p>
                                </div>
                            </a>
                        </toujou-card>
                    </div>
                    <div class="list-group-item search-result results-entry" data-document-score="1" data-document-id="1ba72943a851232127579e12d88bdd4327fe0a9d/tx_neustatrips_domain_model_trip/2" data-document-url="">
                        <toujou-card class="toujou-card toujou-card--trip" element-design="default">
                            <a href="https://www.seabreeze.travel/azoren/rundreise/azoren-wale-und-meer-begegnungen/" class="toujou-card__title-link">
                                <div class="toujou-card__top">
                                    <figure class="toujou-card__figure">
                                        <img class="toujou-card__image" src="/fileadmin/_processed_/8/9/csm_wale-pico-saomiguel-azoren-01_4d1467d9fc.jpg" width="1920" height="1080" data-width="1920" data-height="1080" alt="" loading="lazy">
                                    </figure>
                                    <div class="toujou-card__top-content">
                                        <p class="toujou-card__top-infos">
                                            12 
                                            Tage
                                            <span class="toujou-card__top-infos-separator">|</span>
                                            Individual
                                        </p>
                                        <h3 class="toujou-card__title">Azoren, Wale und Meer - Begegnungen</h3>
                                        <p class="toujou-card__destination">Azoren</p>
                                    </div>
                                </div>
                                <div class="toujou-card__bottom">
                                    <p class="toujou-card__description">Wal-und Delfinbeobachtung auf São Miguel und Pico</p>
                                    <p class="toujou-card__price">
                                        pro Person ab <span class="toujou-card__price-amount">1.120 €</span>
                                    </p>
                                </div>
                            </a>
                        </toujou-card>
                    </div>
                    <div class="list-group-item search-result results-entry" data-document-score="1" data-document-id="1ba72943a851232127579e12d88bdd4327fe0a9d/tx_neustatrips_domain_model_trip/1" data-document-url="">
                        <toujou-card class="toujou-card toujou-card--trip" element-design="default">
                            <a href="https://www.seabreeze.travel/azoren/rundreise/die-kompakte-azoren-rundreise/" class="toujou-card__title-link">
                                <div class="toujou-card__top">
                                    <figure class="toujou-card__figure">
                                        <img class="toujou-card__image" src="/fileadmin/_processed_/e/1/csm_klassische-rundreise-azoren-01_9e23cee0d8.jpg" width="1920" height="1080" data-width="1920" data-height="1080" alt="" loading="lazy">
                                    </figure>
                                    <div class="toujou-card__top-content">
                                        <p class="toujou-card__top-infos">
                                            8 
                                            Tage
                                            <span class="toujou-card__top-infos-separator">|</span>
                                            Individual
                                        </p>
                                        <h3 class="toujou-card__title">Die kompakte Azoren-Rundreise</h3>
                                        <p class="toujou-card__destination">Azoren</p>
                                    </div>
                                </div>
                                <div class="toujou-card__bottom">
                                    <p class="toujou-card__description">São Miguel, Faial, Pico und Terceira</p>
                                    <p class="toujou-card__price">
                                        pro Person ab <span class="toujou-card__price-amount">770 €</span>
                                    </p>
                                </div>
                            </a>
                        </toujou-card>
                    </div>
                    <div class="list-group-item search-result results-entry" data-document-score="1" data-document-id="1ba72943a851232127579e12d88bdd4327fe0a9d/tx_neustatrips_domain_model_trip/81" data-document-url="">
                        <toujou-card class="toujou-card toujou-card--trip" element-design="default">
                            <a href="https://www.seabreeze.travel/madeira/rundreise/madeira-outdoor-abenteuer-pur/" class="toujou-card__title-link">
                                <div class="toujou-card__top">
                                    <figure class="toujou-card__figure">
                                        <img class="toujou-card__image" src="/fileadmin/_processed_/b/5/csm_outdoor-abenteuer-madeira-01_88defcd656.jpg" width="1920" height="1080" data-width="1920" data-height="1080" alt="" loading="lazy">
                                    </figure>
                                    <div class="toujou-card__top-content">
                                        <p class="toujou-card__top-infos">
                                            8 
                                            Tage
                                            <span class="toujou-card__top-infos-separator">|</span>
                                            Individual
                                        </p>
                                        <h3 class="toujou-card__title">Madeira - Outdoor Abenteuer Pur</h3>
                                        <p class="toujou-card__destination">Madeira</p>
                                    </div>
                                </div>
                                <div class="toujou-card__bottom">
                                    <p class="toujou-card__description">Wale, Wandern, Biken, Schnorcheln und Canyoning</p>
                                    <p class="toujou-card__price">
                                        pro Person ab <span class="toujou-card__price-amount">630 €</span>
                                    </p>
                                </div>
                            </a>
                        </toujou-card>
                    </div>
                </ol>
                <ul class="solr-pagination solr-pagination--below">
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
            </div>
            <!---->
        </toujou-solr-search>
     `;
};

export const SolrSearch = Template.bind({});

SolrSearch.args = {}

