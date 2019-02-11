import Products from '../entity/Products';
import AbstractPresenterObserver from '../../common/observer/AbstractPresenterObserver';
import ProductsViewInterface from '../view/ProductsViewInterface';

export default class GetProductsObserver extends AbstractPresenterObserver<Products, ProductsViewInterface> {
    protected view: ProductsViewInterface;

    constructor(view: ProductsViewInterface) {
        super();
        this.bind(view);
    }

    public error(error?: Error): void {
        this.view.displayError(error ? error.message : 'error');
    }

    public complete(): void {
        this.view.hideLoading();
    }

    public next(value: Products): void {
        // not implemented
    }

}
