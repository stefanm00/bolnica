package rva_backend.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import rva_backend.models.Dijagnoza;
import rva_backend.service.DijagnozaService;

@CrossOrigin
@RestController
public class DijagnozaController {

    @Autowired
    private DijagnozaService service;

    @GetMapping("/dijagnoza")
    public ResponseEntity<List<Dijagnoza>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @GetMapping("/dijagnoza/{id}")
    public ResponseEntity<Dijagnoza> getOne(@PathVariable Integer id) {
        Optional<Dijagnoza> dijagnoza = service.findById(id);

        if (dijagnoza.isPresent()) {
            return new ResponseEntity<>(dijagnoza.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/dijagnoza/naziv/{naziv}")
    public ResponseEntity<List<Dijagnoza>> getByNaziv(@PathVariable String naziv) {
        return new ResponseEntity<>(service.findByNaziv(naziv), HttpStatus.OK);
    }

    @GetMapping("/dijagnoza/oznaka/{oznaka}")
    public ResponseEntity<List<Dijagnoza>> getByOznaka(@PathVariable String oznaka) {
        return new ResponseEntity<>(service.findByOznaka(oznaka), HttpStatus.OK);
    }

    @PostMapping("/dijagnoza")
    public ResponseEntity<Dijagnoza> add(@RequestBody Dijagnoza dijagnoza) {
        Dijagnoza saved = service.save(dijagnoza);
        URI location = URI.create("/dijagnoza/" + saved.getId());
        return ResponseEntity.created(location).body(saved);
    }

    @PutMapping("/dijagnoza/{id}")
    public ResponseEntity<Dijagnoza> update(@RequestBody Dijagnoza dijagnoza, @PathVariable Integer id) {
        if (service.existsById(id)) {
            dijagnoza.setId(id);
            return ResponseEntity.ok(service.save(dijagnoza));
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/dijagnoza/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        if (service.existsById(id)) {
            service.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}