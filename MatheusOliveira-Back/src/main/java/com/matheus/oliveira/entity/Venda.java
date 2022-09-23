package com.matheus.oliveira.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import lombok.Data;

@Entity
@Data
public class Venda {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String clientName;
	private String cpfClient;
	private Double valuePurchase;
	private Double valueSale;
	private String vehicleDescription;
	private Double discount;
	private Double total;
	private Double comission;
}
