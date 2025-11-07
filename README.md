# Dokumentasi API Aplikasi Catatan

Dokumentasi ini menjelaskan setiap endpoint yang tersedia di API aplikasi catatan.

## 1\. Menambahkan Catatan Baru

Endpoint ini digunakan untuk membuat dan menyimpan catatan baru.

  * **Method:** `POST`
  * **Path:** `/notes`

### Request Body:

  * **title** (string, wajib): Judul catatan.
  * **tags** (array of strings, wajib): Tag atau kategori untuk catatan.
  * **body** (string, wajib): Isi dari catatan.

### Contoh Request Body:

```json
{
    "title": "Judul Catatan",
    "tags": ["tag1", "tag2"],
    "body": "Ini adalah isi dari catatan."
}
```

### Response:

  * **201 (Created):** Jika catatan berhasil ditambahkan.

    ```json
    {
        "status": "success",
        "message": "Catatan berhasil ditambahkan",
        "data": {
            "noteId": "V0StG1nJ_1-2Y-3a"
        }
    }
    ```

  * **500 (Internal Server Error):** Jika terjadi kegagalan saat menambahkan catatan.

    ```json
    {
        "status": "fail",
        "message": "Catatan gagal ditambahkan"
    }
    ```

-----

## 2\. Mendapatkan Semua Catatan

Endpoint ini untuk mengambil semua catatan yang telah tersimpan.

  * **Method:** `GET`
  * **Path:** `/notes`

### Response:

  * **200 (OK):** Mengembalikan daftar semua catatan.

    ```json
    {
        "status": "success",
        "data": {
            "notes": [
                {
                    "id": "V0StG1nJ_1-2Y-3a",
                    "title": "Judul Catatan",
                    "tags": ["tag1", "tag2"],
                    "body": "Ini adalah isi dari catatan.",
                    "createdAt": "2025-11-07T05:35:16.000Z",
                    "updatedAt": "2025-11-07T05:35:16.000Z"
                },
                ...
            ]
        }
    }
    ```

-----

## 3\. Mendapatkan Catatan Berdasarkan ID

Endpoint ini untuk mengambil detail dari satu catatan spesifik berdasarkan ID-nya.

  * **Method:** `GET`
  * **Path:** `/notes/{id}`

### Path Parameter:

  * **id** (string, wajib): ID unik dari catatan yang ingin diambil.

### Response:

  * **200 (OK):** Jika catatan ditemukan, mengembalikan detail catatan.

    ```json
    {
        "status": "success",
        "data": {
            "note": {
                "id": "V0StG1nJ_1-2Y-3a",
                "title": "Judul Catatan",
                "tags": ["tag1", "tag2"],
                "body": "Ini adalah isi dari catatan.",
                "createdAt": "2025-11-07T05:35:16.000Z",
                "updatedAt": "2025-11-07T05:35:16.000Z"
            }
        }
    }
    ```

  * **404 (Not Found):** Jika catatan dengan ID yang diberikan tidak ditemukan.

    ```json
    {
        "status": "fail",
        "message": "Catatan tidak ditemukan"
    }
    ```

-----

## 4\. Mengubah Catatan Berdasarkan ID

Endpoint ini untuk memperbarui data dari sebuah catatan yang sudah ada.

  * **Method:** `PUT`
  * **Path:** `/notes/{id}`

### Path Parameter:

  * **id** (string, wajib): ID unik dari catatan yang akan diubah.

### Request Body:

  * **title** (string, wajib): Judul baru untuk catatan.
  * **tags** (array of strings, wajib): Tag atau kategori baru.
  * **body** (string, wajib): Isi baru dari catatan.

### Contoh Request Body:

```json
{
    "title": "Judul Catatan yang Sudah Diperbarui",
    "tags": ["updated-tag"],
    "body": "Isi catatan yang telah diperbarui."
}
```

### Response:

  * **200 (OK):** Jika catatan berhasil diperbarui.

    ```json
    {
        "status": "success",
        "message": "Catatan berhasil diperbarui"
    }
    ```

  * **404 (Not Found):** Jika catatan dengan ID yang diberikan tidak ditemukan.

    ```json
    {
        "status": "fail",
        "message": "Gagal memperbarui catatan. Id tidak ditemukan"
    }
    ```

-----

## 5\. Menghapus Catatan Berdasarkan ID

Endpoint ini untuk menghapus sebuah catatan secara permanen.

  * **Method:** `DELETE`
  * **Path:** `/notes/{id}`

### Path Parameter:

  * **id** (string, wajib): ID unik dari catatan yang akan dihapus.

### Response:

  * **200 (OK):** Jika catatan berhasil dihapus.

    ```json
    {
        "status": "success",
        "message": "Catatan berhasil dihapus"
    }
    ```

  * **404 (Not Found):** Jika catatan dengan ID yang diberikan tidak ditemukan.

    ```json
    {
        "status": "fail",
        "message": "Catatan gagal dihapus. Id tidak ditemukan"
    }
    ```
