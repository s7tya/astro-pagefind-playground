/// <reference types="astro/client" />

declare module "@pagefind/default-ui" {
    declare class PagefindUI {
        constructor(opts: {
            element?: string | HTMLElement,
            bundlePath?: string,
            pageSize?: number,
            resetStyles?: boolean,
            showImages?: boolean,
            showSubResults?: boolean,
            excerptLength?: number,
            // processResult = opts.processResult ?? null;
            // processTerm = opts.processTerm ?? null;
            showEmptyFilters?: boolean,
            debounceTimeoutMs?: number,
            // mergeIndex = opts.mergeIndex ?? [];
            // translations = opts.translations ?? [];
            autofocus?: boolean,
            // sort = opts.sort ?? null;
        })
    }
}