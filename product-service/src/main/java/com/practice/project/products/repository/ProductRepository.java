package com.practice.project.products.repository;

import com.practice.project.products.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository  extends MongoRepository  <Product, String> {
}
