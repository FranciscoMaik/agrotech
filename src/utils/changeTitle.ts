import { IItemsSelected } from '../types';

export const changeTitle = (item: IItemsSelected): string => {
  const titleSelected = {
    dashboard: 'Dashboard',
    farmer: 'Agricultor(es)',
    family: 'Família(s) Agrícola',
    locale: 'Propriedade(s)',
    agriculturalActivity: 'Atividade(s) Agrícolas',
    livestockActivity: 'Atividade(s) Pecuárias',
    orderOfService: 'Ordem(ns) de Serviço',
    reports: 'Relatórios',
  };

  return titleSelected[item];
};
