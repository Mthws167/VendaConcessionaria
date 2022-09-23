package com.matheus.oliveira.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.matheus.oliveira.entity.Venda;
import com.matheus.oliveira.repository.ServicoRepository;

@Service
public class ServicoService {

	@Autowired
	private ServicoRepository servicoRepository;
	
	public List<Venda> listarTodos(){
		return servicoRepository.findAll();
	}
	
	public Venda salvar(Venda venda) {
		Venda servicoNovo = servicoRepository.saveAndFlush(venda);
		return servicoNovo;
	}
	
	public Venda alterar(Venda venda) {
		return servicoRepository.saveAndFlush(venda);
	}
	
	public void excluir(Long id) {
		Venda venda = servicoRepository.findById(id).get();
		servicoRepository.delete(venda);
	}
}
