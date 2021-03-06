import {Component} from "@angular/core";

import {Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";
import {PokemonComparator} from "../utils/pokemon-comparator";
import {EXAMPLES} from "./examples";

@Component({
    selector: "clr-datagrid-sorting-demo",
    providers: [Inventory],
    templateUrl: "./sorting.html",
    styleUrls: ["../datagrid.demo.scss"]
})
export class DatagridSortingDemo {
    examples = EXAMPLES;
    users: User[];

    pokemonComparator = new PokemonComparator();

    constructor(private inventory: Inventory) {
        inventory.size = 10;
        inventory.reset();
        this.users = inventory.all;
    }
}