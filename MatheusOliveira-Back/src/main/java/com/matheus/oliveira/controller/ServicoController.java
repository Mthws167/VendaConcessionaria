package com.matheus.oliveira.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.matheus.oliveira.entity.Venda;
import com.matheus.oliveira.service.ServicoService;

@RestController
@RequestMapping("/api/venda")
public class ServicoController {

	@Autowired
	private ServicoService servicoService;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/")
	public List<Venda> listarTodos() {
		return servicoService.listarTodos();		
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/")
	public Venda salvar(@RequestBody Venda venda) {
		return servicoService.salvar(venda);
	}
	

	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/")
	public Venda alterar(@RequestBody Venda venda) {
		return servicoService.alterar(venda);
	}


	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> excluir (@PathVariable("id") Long id){
		servicoService.excluir(id);
		return ResponseEntity.ok().build();
	}
	
}
