import SaveFetchedProductsUseCase from '../interactors/SaveFetchedProductsUseCase';

const PRODUCTS = {
    ProductsPresenterInterface: Symbol('ProductsPresenterInterface'),
    GetProductsUseCase: Symbol('GetProductsUseCase'),
    ProductsStoreRepositoryInterface: Symbol('ProductsStoreRepositoryInterface'),
    ProductsStoreGatewayInterface: Symbol('ProductsStoreGatewayInterface'),
    ProductsGatewayInterface: Symbol('ProductsGatewayInterface'),
    FetchProductsQueryObjectInterface: Symbol('FetchProductsQueryObjectInterface'),
    FetchProductsUseCase: Symbol('FetchProductsUseCase'),
    SaveFetchedProductsUseCase: Symbol('SaveFetchedProductsUseCase'),
};

export { PRODUCTS };
