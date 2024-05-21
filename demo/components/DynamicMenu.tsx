
import { PalmyraTreeStore } from "palmyra-wire";
import { AsyncTreeMenu } from "palmyra-rui"

const DynamicMenu = ({ sidebarWidth }) => {



    const treeStore = new PalmyraTreeStore({ target: '/demo/testdata' }, "/flatMenu.json");

    return (
        <div style={{ width: "100%" }}>
            <div className='sidebar-middle' style={{ display: 'block' }}>
                <AsyncTreeMenu store={treeStore} />
            </div>
        </div>
    )
}

export default DynamicMenu;
