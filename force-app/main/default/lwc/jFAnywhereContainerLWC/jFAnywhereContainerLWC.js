import { LightningElement } from 'lwc';
import jotform from '@salesforce/resourceUrl/jotform';
import { loadScript } from 'lightning/platformResourceLoader';

export default class JFAnywhereContainerLWC extends LightningElement {
    jfAnyhereInitialized = false;

    renderedCallback() {
        console.log('rendered callback');
        if (this.jfAnyhereInitialized) {
            return;
        }
        this.jfAnyhereInitialized = true;

        loadScript(this, jotform + '/anywhere/test.js')
        .then(() => {
            console.log('Jotform Anywhere is initialized');
            helloWorld();
        })
        .catch(error => {
            console.log(error);
        });
    }
}