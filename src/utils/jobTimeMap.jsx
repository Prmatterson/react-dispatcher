                {/* )}
              ></Controller>
              <Form.Label>Job Length</Form.Label>
              <Controller
                control={control}
                name="jobLength"
                rules={{ required: true }}
                render={(field) => (
                  <Form.Select type="text" onChange={field.onChange}>
                    {jobTime.map((timeDetails) => {
                      return <option key={field.name}>{timeDetails}</option>;
                    })}
                  </Form.Select>
                )}
              ></Controller> */}