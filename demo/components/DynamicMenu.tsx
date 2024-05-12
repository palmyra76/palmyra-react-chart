
import { GetRequest, QueryRequest, QueryResponse, TreeQueryStore} from "palmyra-wire";
import {AsyncTreeMenu} from "palmyra-rui"

interface IChildTreeRequest {
    parent?: number
}

const MenuData = {
    "result": [
        {
            "id": 1,
            "name": "Home",
            "code": "home"
        },
        {
            "id": 2,
            "name": "Dynamic Fields",
            "code": "dynamic"
        },
        {
            "id": 3,
            "name": "Tree Menu",
            "code": "menu"
        },
        {
            "id": 4,
            "name": "Export Component",
            "code": "export"
        },
        {
            "id": 5,
            "name": "Dependant Fields",
            "code": "deps"
        },
        {
            "id": 6,
            "name": "Static SummaryGrid",
            "code": "grid"
        },
        {
            "id": 7,
            "name": "Backend Grid Layout",
            "code": "demo/simple/backendgrid"
        },
        {
            "id": 8,
            "rid": null,
            "name": "Booth Status",
            "code": "admin/masterdata/boothStatus",
            "action": "summary",
            "parent": 4,
            "children": null,
            "recordType": null,
            "target": null
        },
        {
            "id": 9,
            "name": "Simple Layout Demo",
            "code": "demo/simple",
            "children": "10,11,12,13,14,15",
        },
        {
            "id": 10,
            "name": "Grid Layout",
            "code": "demo/simple/grid",
            "parent": 9
        },
        {
            "id": 11,
            "name": "Dashboard Layout",
            "code": "demo/simple/dashboard",
            "parent": 9
        },
        {
            "id": 12,
            "name": "Chart Layout",
            "code": "demo/simple/chart",
            "parent": 9
        },
        {
            "id": 13,
            "name": "Card Layout",
            "code": "demo/simple/card",
            "parent": 9
        },
        {
            "id": 14,
            "name": "Edit Form Layout",
            "code": "demo/simple/formEdit",
            "parent": 9
        },
        {
            "id": 15,
            "name": "View Form Layout",
            "code": "demo/simple/formView",
            "parent": 9
        }
    ],
    "status": 200
};


const DynamicMenu = ({ sidebarWidth }) => {

    const treeStore = new DummyTreeStore(MenuData);

    return (
        <div style={{ width: "100%" }}>
            <div className='sidebar-middle' style={{ display: 'block' }}>
                <AsyncTreeMenu store={treeStore} />
            </div>
        </div>
    )
}

export default DynamicMenu;




class DummyTreeStore implements TreeQueryStore<IChildTreeRequest, any>{
    data: any;
    constructor(data: any) {
        this.data = data;
    }
    query(request: QueryRequest): Promise<QueryResponse<any>> {
        throw new Error("Method not implemented.");
    }
    queryLayout(request: QueryRequest): Promise<any> {
        throw new Error("Method not implemented.");
    }
    get(request: GetRequest): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getIdentity(o: any){
        return o.id;
    }

    getRoot(): Promise<any> {
        return Promise.resolve(this.data);
    }

    getChildren(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    getIdProperty(): string {
        return "id";
    }
}