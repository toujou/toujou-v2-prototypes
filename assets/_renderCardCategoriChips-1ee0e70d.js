const a=(i,o)=>{let c="";return o==="default"?o="primary":o==="inverted"&&(o="font"),i.forEach(r=>{c+=`
            <a href="#" class="collection-item__category-link">
                <toujou-chip
                    class="chip collection-item__category-chip"
                    chip-icon-position="left"
                    chip-bg-color="${o}"
                    chip-border-radius="round"
                    chip-size="extra-small"
                    is-clickable=""
                >
                    <toujou-icon class="icon chip__icon" icon-name="bookmark-filled"></toujou-icon> ${r}
                </toujou-chip>
            </a>
        `}),c};export{a as r};
