(defun SayHello ()
  (setq Name (string (read)))
  (princ "hello ")
  (write-string Name)
  
(SayHello)
