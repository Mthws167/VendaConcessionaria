package com.matheus.oliveira.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matheus.oliveira.entity.Venda;

public interface ServicoRepository extends JpaRepository<Venda, Long>{
	
}
