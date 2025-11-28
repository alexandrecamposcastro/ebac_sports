import { useAppSelector, useAppDispatch } from "../store/hooks";
import { favoritar } from "../store/slices/favoriteSlice";
import { adicionarAoCarrinho } from "../store/slices/cartSlice";
import { useGetProductsQuery } from "../store/api/productsApi";
import Produto from "../components/Produto";
import * as S from "./styles";
import { Produto as ProdutoType } from "../App";

const ProdutosComponent = () => {
  const dispatch = useAppDispatch();
  const favoritos = useAppSelector((state) => state.favorites.items);
  const { data: produtos, error, isLoading } = useGetProductsQuery();

  const produtoEstaNosFavoritos = (produtoId: number) => {
    return favoritos.some((f) => f.id === produtoId);
  };

  const handleFavoritar = (produto: ProdutoType) => {
    dispatch(favoritar(produto));
  };

  const handleAdicionarAoCarrinho = (produto: ProdutoType) => {
    dispatch(adicionarAoCarrinho(produto));
  };

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar produtos</div>;

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
            key={produto.id}
            produto={produto}
            favoritar={handleFavoritar}
            aoComprar={handleAdicionarAoCarrinho}
          />
        ))}
      </S.Produtos>
    </>
  );
};

export default ProdutosComponent;
